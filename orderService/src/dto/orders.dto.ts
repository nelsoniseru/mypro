import { OrderStatus } from '../enum/order-status.enum'; 

export class OrderDto {
  id: number;
  item: string;
  quantity: number;
  price: number;
  status: OrderStatus;
  deletedAt: Date
}
