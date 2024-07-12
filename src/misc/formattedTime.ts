import { DeliveryTimerProps } from "../context/OrderContext"

export type FormattedTimeProps = {
    timer: DeliveryTimerProps | null;
    orderId: number;
}

export default function formattedTime({timer, orderId}: FormattedTimeProps) {
    // Transforma o tempo em segundos para o formato HH:MM:SS
    
    if (timer !== null)   {
        return new Date(Math.round(timer[orderId]) * 1000).toISOString().slice(11, 19)
    }
} 