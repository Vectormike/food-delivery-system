import { Injectable, Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseModule } from './database/database.module';
import { OrderModule } from './order/order.module';
import { RabbitMQService } from '.././src/rabbitmq/rabbitmq.service';

@Module({
  controllers: [AppController],
  providers: [RabbitMQService],
  imports: [DatabaseModule, OrderModule],
})
export class AppModule implements OnModuleInit {
  constructor(private readonly rabbitMQService: RabbitMQService) {}

  onModuleInit() {
    this.rabbitMQService.startListening();
  }
}
