import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service'
import { ConfigModule } from '@nestjs/config';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    OrdersModule
  ],
  providers: [PrismaService],
})
export class AppModule {}
