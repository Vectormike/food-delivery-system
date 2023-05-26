<p align="center">
  <img src="https://res.cloudinary.com/class-attend/image/upload/v1673013921/logo_d3czjj.png" width="200" alt="FoodCourt Logo" />
</p>


## Description

The Food Delivery System is designed to handle the ordering process, track order details, log system activities, and provide integration with RabbitMQ for real-time communication.

The main components of the system include:

- Orders: Represents customer orders placed in the system.
- Logs: Tracks system activities and events.
- OrderTotalAmountHistory: Keeps a record of the total amount history for orders.
- CalculatedOrder: Stores calculated order details.
- OrderType: Defines different types of orders.
## Installation

```bash
$ npm install
```

## Environemnt setup

Copy the file into the project's root directory after Installing node modules.

1. Set up the database connection by modifying the `knexfile.js` file in the project's root directory.

2. Run database migrations to create the required tables:

```
npx knex migrate:latest
```

## RabbitMQ Integration

The system integrates with RabbitMQ to enable real-time communication. The RabbitMQ service listens to a specific queue for incoming messages and performs actions based on the received messages. To configure the RabbitMQ integration, follow these steps:
If you are using Docker to run your RabbitMQ server, you can follow these steps to integrate RabbitMQ into your application:

1. Set up a RabbitMQ container using Docker. You can use the official RabbitMQ Docker image available on Docker Hub. Run the following command to create a RabbitMQ container:

```
docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:latest
```

This command creates a RabbitMQ container and maps the default RabbitMQ ports (5672 for AMQP and 15672 for the management interface) to the corresponding ports on your host machine.

2. The service will start listening to the configured RabbitMQ queue. The messages are published to the RabbitMQ queue whenever an order is created.

## Running the app

```bash
# development
$ npm start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod


```

