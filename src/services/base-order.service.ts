import { Injectable } from '@nestjs/common';
import { MarketConfigProvider } from 'src/providers/market-config.provider';

@Injectable()
export class BaseOrderService {
  constructor(private readonly marketConfigProvider: MarketConfigProvider) {}

  async createOrder(data: any): Promise<string> {
    const config = this.marketConfigProvider.getMarketConfig(data.tenantId);
    console.log(
      `Creating order using default logic. Name: ${config.name} - Currency: ${config.currency}`,
    );
    return 'default-order-id';
  }
}