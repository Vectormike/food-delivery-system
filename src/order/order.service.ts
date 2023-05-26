import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { OrderRepository } from './order.repository';
import { RabbitMQService } from 'src/rabbitmq/rabbitmq.service';

@Injectable()
export class OrderService {
  constructor(
    private orderRepository: OrderRepository,
    private readonly rabbitMQService: RabbitMQService,
    private readonly logger: Logger,
  ) {}

  async createOrder(orderData: any) {
    try {
      const createdOrder = await this.orderRepository.createOrder(orderData);
      await this.rabbitMQService.publishOrderCreated(createdOrder.order);
      return createdOrder;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException('Error creating order');
    }
  }

  // Get all orders
  async getAllOrders() {
    try {
      const orders = await this.orderRepository.getAllOrders();
      return orders;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException('Error getting orders');
    }
  }

  // Find the meal in the calculated orders with the highest quantity bought. Return the name of the meal and the quantity.
  async getHighestQuantityMeal() {
    try {
      const highestQuantityMeal =
        await this.orderRepository.getHighestQuantityMeal();
      return highestQuantityMeal;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
