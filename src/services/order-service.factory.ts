import { Injectable } from '@nestjs/common';
import { BaseOrderService } from './base-order.service';
import { MarketAOrderService } from './marketA-order.service';
import { MarketBOrderService } from './marketB-order.service';
import { MarketConfigProvider } from 'src/providers/market-config.provider';


@Injectable()
export class OrderServiceFactory {
  constructor(
    private readonly marketConfigProvider: MarketConfigProvider,
  ) {}

  getOrderService(tenantId: string): BaseOrderService {
   // const config = this.marketConfigProvider.getMarketConfig();

    switch (tenantId) {
      case 'marketA':
        return new MarketAOrderService(this.marketConfigProvider);
      case 'marketB':
        return new MarketBOrderService(this.marketConfigProvider);
      default:
        return new BaseOrderService(this.marketConfigProvider);
    }
  }
}
