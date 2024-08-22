import { Controller, Get, Post, Body, Param, Put, Delete, UsePipes } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { JoiValidationPipe } from './pipes/joi-validation.pipes';
import { orderSchema } from './validators/orders.validator'
import {OrderDto} from './dto/orders.dto'
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @UsePipes(new JoiValidationPipe(orderSchema))
  create(@Body() createOrderDto: OrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateOrderDto:OrderDto) {
    return this.ordersService.update(+id,updateOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersService.remove(+id);
  }
}
