/* eslint-disable @typescript-eslint/no-empty-function */
import {
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import knex from '../database';
import { Knex } from 'knex';
import { Orders } from './order.interface';

@Injectable()
export class OrderRepository {
  Order: Knex.QueryBuilder<any, any>;

  constructor() {}

  async createOrder(orderData: Orders) {
    try {
      const insertedData = await knex.transaction(async (trx) => {
        const [calculatedOrder] = await trx('calculated_orders')
          .insert(orderData.calculated_order)
          .returning(['id']);
        const [orderTotalAmountHistory] = await trx(
          'order_total_amount_histories',
        )
          .insert(orderData.order_total_amount_history)
          .returning(['id']);
        const [logs] = await trx('logs')
          .insert(orderData.logs)
          .returning(['id']);
        const [orderType] = await trx('order_types')
          .insert(orderData.order_type)
          .returning(['id']);

        const [order] = await trx('orders')
          .insert({
            calculated_order_id: calculatedOrder.id,
            ...orderData.order,
          })
          .returning(['id']);

        return {
          calculatedOrder,
          orderTotalAmountHistory,
          logs,
          orderType,
          order,
        };
      });

      // Access the inserted data
      const {
        calculatedOrder,
        orderTotalAmountHistory,
        logs,
        orderType,
        order,
      } = insertedData;

      // Process the inserted data if needed

      return insertedData;
    } catch (error) {
      // Handle the error
      console.error(error);
    }
  }

  async getAllOrders() {
    try {
      const orders = await knex.raw(
        `SELECT orders.*, calculated_orders.*, logs.*, order_total_amount_history.* FROM orders
        LEFT JOIN calculated_orders ON orders.calculated_order_id = calculated_orders.id
        LEFT JOIN logs ON orders.id = logs.order_id
        LEFT JOIN order_total_amount_history ON orders.id = order_total_amount_history.order_id`,
      );
      return orders.rows;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async getHighestQuantityMeal() {
    try {
      const highestQuantityMeal = await knex.raw(
        `SELECT meals.name, meals.quantity FROM calculated_orders
        LEFT JOIN meals ON calculated_orders.meals = meals.id
        ORDER BY meals.quantity DESC
        LIMIT 1`,
      );
      return highestQuantityMeal.rows;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
