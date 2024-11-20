import { Injectable } from '@nestjs/common';
import { BaseOrderService } from './base-order.service';

@Injectable()
export class MarketAOrderService extends BaseOrderService {
  async createOrder(data: any): Promise<string> {
    console.log('Creating order using Market A specific logic');
    return 'marketA-order-id';
  }
}
