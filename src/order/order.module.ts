import { Logger, Module, OnModuleInit } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { RabbitMQService } from '../rabbitmq/rabbitmq.service';
import { HelperService } from 'src/utils/helpers';
import { OrderRepository } from './order.repository';

@Module({
  controllers: [OrderController],
  providers: [
    OrderService,
    HelperService,
    OrderRepository,
    RabbitMQService,
    Logger
  ],
})
export class OrderModule implements OnModuleInit {
  constructor(private readonly rabbitMQService: RabbitMQService) {}

  onModuleInit() {
    this.rabbitMQService.startListening();
  }
}
