import React, {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

export type OrderProps = {
  orderId: number;
  orderItem: string;
  orderFlavor: string;
  orderSize: string;
  orderImg: string;
  orderAdditionalInfo: string;
  orderAddress: string;
};

export type DeliveryTimerProps = {
  [key: string]: number; // Key é o ID do pedido; o valor é o tempo de entrega em minutos
};

type OrderContextProps = {
  orderId: number;
  setOrderId: React.Dispatch<React.SetStateAction<number>>;
  orderItem: string;
  setOrderItem: React.Dispatch<React.SetStateAction<string>>;
  orderFlavor: string;
  setOrderFlavor: React.Dispatch<React.SetStateAction<string>>;
  orderSize: string;
  setOrderSize: React.Dispatch<React.SetStateAction<string>>;
  orderImg: string;
  setOrderImg: React.Dispatch<React.SetStateAction<string>>;
  orderAdditionalInfo: string;
  setOrderAdditionalInfo: React.Dispatch<React.SetStateAction<string>>;
  orderAddress: string;
  setOrderAddress: React.Dispatch<React.SetStateAction<string>>;
  orderTravelTime: number;
  setOrderTravelTime: React.Dispatch<React.SetStateAction<number>>;
  orderDeliveryTimer: DeliveryTimerProps | null;
  setOrderDeliveryTimer: React.Dispatch<
    React.SetStateAction<DeliveryTimerProps | null>
  >;
  allOrdersList: OrderProps[] | [];
  setAllOrdersList: React.Dispatch<React.SetStateAction<OrderProps[] | []>>;
  registerOrder: () => void;
  resetOrderStates: () => void;
};

const Context = createContext<OrderContextProps | null>(null);

type OrderProviderProps = {
  children: ReactNode;
};

export function ContextProvider({ children }: OrderProviderProps) {
  const [orderId, setOrderId] = useState(0);
  const [orderItem, setOrderItem] = useState("");
  const [orderFlavor, setOrderFlavor] = useState("");
  const [orderSize, setOrderSize] = useState("");
  const [orderImg, setOrderImg] = useState("");
  const [orderAdditionalInfo, setOrderAdditionalInfo] = useState("");
  const [orderAddress, setOrderAddress] = useState(""); // Endereco de entrega
  const [orderTravelTime, setOrderTravelTime] = useState(0);
  const [orderDeliveryTimer, setOrderDeliveryTimer] =
    useState<DeliveryTimerProps | null>(null); // Todos os temporizadores de entrega do pedido em segundos
  const [allOrdersList, setAllOrdersList] = useState<OrderProps[] | []>([]); // Lista com todos os pedidos

  useEffect(() => {
    const interval = setInterval(() => {
      setOrderDeliveryTimer((prevTimers) => {
        const updatedTimers: DeliveryTimerProps = { ...prevTimers };

        // Decrementa cada valor em 1
        Object.keys(updatedTimers).forEach((key: string) => {
          if (updatedTimers[key] > 0) {
            updatedTimers[key] -= 1;
          }
        });

        return updatedTimers;
      });
    }, 1000); // 1000 milissegundos = 1 segundo

    // Limpa o intervalo quando o componente for desmontado
    return () => clearInterval(interval);
  }, []);

  function registerOrder() {
    // Faz a verificacao do maior numero de ID que ha para incrementar um valor no ID do novo pedido
    const newOrderId = allOrdersList.length + 1;
    setOrderId(newOrderId);

    // Apenas pega o valor do array com todos os pedidos anteriores e adiciona o novo
    setAllOrdersList((prevOrdersList) => [
      ...prevOrdersList,
      {
        orderId: newOrderId,
        orderItem,
        orderFlavor,
        orderSize,
        orderImg,
        orderAdditionalInfo,
        orderAddress,
      },
    ]);
  }

  function resetOrderStates() {
    setOrderItem("");
    setOrderFlavor("");
    setOrderSize("");
    setOrderImg("");
    setOrderAdditionalInfo("");
    setOrderAddress("");
    setOrderTravelTime(0);
  }

  return (
    <Context.Provider
      value={{
        orderId,
        setOrderId,
        orderItem,
        setOrderItem,
        orderFlavor,
        setOrderFlavor,
        orderSize,
        setOrderSize,
        orderImg,
        setOrderImg,
        orderAdditionalInfo,
        setOrderAdditionalInfo,
        orderAddress,
        setOrderAddress,
        orderDeliveryTimer,
        setOrderDeliveryTimer,
        orderTravelTime,
        setOrderTravelTime,
        allOrdersList,
        setAllOrdersList,
        registerOrder,
        resetOrderStates,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useOrderContext = () => {
  const useOrder = useContext(Context);

  if (!useOrder) {
    throw new Error(
      "useOrderContext precisa ser utilizado dentro de <Context.Provider>"
    );
  }

  return useOrder;
};
