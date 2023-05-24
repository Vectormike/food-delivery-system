import { Injectable, Logger } from '@nestjs/common';
import { connect } from 'amqplib';
import { Order } from '../order/order.interface';

@Injectable()
export class RabbitMQService {
  private readonly logger = new Logger(RabbitMQService.name);
  private readonly queueName = 'orderQueue';

  async startListening() {
    try {
      const connection = await connect('amqp://localhost');
      const channel = await connection.createChannel();

      // Declare the queue to consume from
      await channel.assertQueue(this.queueName, { durable: true });

      this.logger.log(
        'RabbitMQ service is running and listening to the order queue...',
      );

      // Consume messages from the queue
      channel.consume(this.queueName, (message) => {
        if (message.content) {
          const order = JSON.parse(message.content.toString());
          this.logger.log(`Received order: ${order.id}`);

          // Perform the desired action with the received order
          // For this test, we will log a statement to the console
          this.logger.log(`Order received: ${order.id}`);
        }

        // Acknowledge the message to remove it from the queue
        channel.ack(message);
      });
    } catch (error) {
      this.logger.error('An error occurred:', error);
    }
  }

  async publishOrderCreated(order: Order) {
    try {
      // Connect to RabbitMQ server
      const connection = await connect('amqp://localhost');
      const channel = await connection.createChannel();

      // Declare the queue to publish to
      await channel.assertQueue(this.queueName, { durable: true });

      // Publish the order creation message to RabbitMQ
      await channel.sendToQueue(
        this.queueName,
        Buffer.from(JSON.stringify(order)),
        {
          persistent: true,
        },
      );

      // When your service receives this message, it should log a statement to the console.
      this.logger.log(`Order created: ${order}`);
      // Close the channel and connection
      await channel.close();
      await connection.close();
    } catch (error) {
      this.logger.error(
        'An error occurred while publishing the order creation message:',
        error,
      );
    }
  }
}
