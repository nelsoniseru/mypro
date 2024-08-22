import { Module, NestModule, MiddlewareConsumer } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { AuthenticationMiddleware } from '../middleware/middleware';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    JwtModule.register({  
    secret:process.env.TOKEN_SECRET, 
    signOptions: { expiresIn:process.env.EXPIRES_IN},
  }), 
  ],
  controllers: [OrdersController],
  providers: [OrdersService, PrismaService],
  exports: [OrdersService],

})
export class OrdersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      consumer
          .apply(AuthenticationMiddleware)
          .forRoutes( OrdersController)
  }
}