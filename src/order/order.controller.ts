import { Controller, Post, Body } from '@nestjs/common';
import { CreateOrderDTO } from '../order/dto/order.dto';
import { OrderService } from './order.service';
import { HelperService } from '../utils/helpers';

@Controller('order')
export class OrderController {
  constructor(
    private readonly orderService: OrderService,
    private readonly helperService: HelperService,
  ) {}

  @Post()
  async createOrder(@Body() order: CreateOrderDTO) {
    const orderResponse = await this.orderService.createOrder(order);
    return this.helperService.sendObjectResponse(
      'Order created successfully',
      orderResponse,
    );
  }

  


}
