import React, { useState, useEffect } from "react";
import "./styles.scss";

import SelectInput from "../../../../components/UI/Input/SelectInput";
import TextAreaInput from "../../../../components/UI/Input/TextAreaInput";

import { useOrderContext } from "../../../../context/OrderContext";

import { MenuItemProps } from "../../../../misc/menuItems";

import menuItems from "../../../../misc/menuItems";

export default function OrderDetail() {
  const [selectedItem, setSelectedItem] = useState<MenuItemProps>(menuItems[0]);
  const {
    orderItem,
    setOrderItem,
    orderFlavor,
    setOrderFlavor,
    orderSize,
    setOrderSize,
    setOrderImg,
    orderAdditionalInfo,
    setOrderAdditionalInfo,
  } = useOrderContext();

  useEffect(() => {
    // Sempre que um item for selecionado, vai setar o estado do item, atualizando a lista de sabores e a seção de informações ao lado
    let item = menuItems.find((item: MenuItemProps) => item.name === orderItem);
    if (item !== undefined) {
      setSelectedItem(item);
    }
  }, [orderItem]);

  useEffect(() => {
    // Atualiza o estado do sabor e tamanho aos valores iniciais do item assim que ele for selecionado
    setOrderFlavor(selectedItem.flavors[0]);
    setOrderSize("Pequeno");
    setOrderImg(selectedItem.img);
  }, [selectedItem]);

  return (
    <div className="Container">
      <div className={"Order-detail"}>
        <form>
          <SelectInput
            label="Item"
            placeholder="Selecione o item"
            options={menuItems.map((item: MenuItemProps) => item.name)}
            value={orderItem}
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
              setOrderItem(event.target.value)
            }
          />
          <SelectInput
            label="Sabor"
            placeholder="Selecione o sabor"
            options={selectedItem?.flavors.map((flavor: string) => flavor)}
            value={orderFlavor}
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
              setOrderFlavor(event.target.value)
            }
          />
          <SelectInput
            label="Tamanho"
            placeholder="Selecione o tamanho"
            options={["Pequeno", "Médio", "Grande"]}
            value={orderSize}
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
              setOrderSize(event.target.value)
            }
          />
          <TextAreaInput
            label="Descrição adicional"
            placeholder="Possui alguma observação?"
            value={orderAdditionalInfo}
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
              setOrderAdditionalInfo(event.target.value)
            }
          />
        </form>
        {selectedItem !== null && (
          <div className="Item-detail">
            <img src={selectedItem.img} alt="Item image" />
            <div id="Item-text-container">
              <div>
                <p id="Item-title">{`${selectedItem.name} ${
                  orderFlavor && `- ${orderFlavor}`
                }`}</p>
                <p>{`${selectedItem.description}`}</p>
              </div>
              <div>
                <div className="Lower-text">
                  <p>Preço:</p>
                  <p>R$ {`${selectedItem.price}`}</p>
                </div>
                <div className="Lower-text">
                  <p>Tempo de preparo:</p>
                  <p>30 min</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
