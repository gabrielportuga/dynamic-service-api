import { Module } from '@nestjs/common';
import { BaseOrderService } from './services/base-order.service';
import { MarketAOrderService } from './services/marketA-order.service';
import { MarketBOrderService } from './services/marketB-order.service';
import { OrderServiceFactory } from './services/order-service.factory';
import { OrderService } from './services/order.service';
import { OrderController } from './controllers/order.controller';
import { MarketConfigProvider } from './providers/market-config.provider';

@Module({
  providers: [
    MarketConfigProvider,
    BaseOrderService,
    MarketAOrderService,
    MarketBOrderService,
    OrderServiceFactory,
    OrderService,
  ],
  controllers: [OrderController],
})
export class OrderModule {}
