import { Controller, Post, Body } from '@nestjs/common';
import { OrderService } from '../services/order.service';
import { Order } from 'src/models/order.model';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('create')
  async createOrder(
    @Body() order: Order,
  ): Promise<string> {
    return this.orderService.createOrder(order);
  }
}
