import { Injectable } from '@nestjs/common';
import { OrderServiceFactory } from './order-service.factory';
import { Order } from 'src/models/order.model';

@Injectable()
export class OrderService {
  constructor(private readonly orderServiceFactory: OrderServiceFactory) {}

  async createOrder(order: Order): Promise<string> {
    const orderService = this.orderServiceFactory.getOrderService(order.tenantId);
    return orderService.createOrder(order);
  }
}
