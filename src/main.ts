import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use((req, res, next) => {
    const tenantId = req.headers['x-tenant-id'] || 'default';
    req['tenantId'] = tenantId;
    next();
  });

  await app.listen(3000);
}
bootstrap();
