import { Injectable, Inject, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { MarketsConfig } from 'src/config/market-config';
import { MarketConfigutation } from 'src/models/market-config.model';

@Injectable({ scope: Scope.REQUEST })
export class MarketConfigProvider {
  private readonly tenantId: string;

  constructor(@Inject(REQUEST) private readonly request: Request) {
    this.tenantId = this.request.headers['x-tenant-id'] as string || 'default';
  }

  getMarketConfig(country: string): MarketConfigutation {
    return MarketsConfig[country] || MarketsConfig[this.tenantId] || MarketsConfig['default'];
  }
}
