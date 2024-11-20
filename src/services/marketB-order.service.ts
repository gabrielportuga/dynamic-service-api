import { Injectable } from '@nestjs/common';
import { BaseOrderService } from './base-order.service';

@Injectable()
export class MarketBOrderService extends BaseOrderService {
  // async createOrder(data: any): Promise<string> {
  //   console.log('Creating order using Market B specific logic');
  //   return 'marketB-order-id';
  // }
}
