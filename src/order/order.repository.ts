/* eslint-disable @typescript-eslint/no-empty-function */
import {
  Injectable,
  InternalServerErrorException,
  Logger,
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

      return insertedData;
    } catch (error) {
      Logger.error(error);
      throw new error();
    }
  }

  async getAllOrders() {
    const orders = await knex.raw(
      `
      SELECT *
      FROM orders
      LEFT JOIN calculated_orders ON orders.calculated_order_id = calculated_orders.id
      `,
    );
    console.log(orders);
    if (!orders) {
      throw new InternalServerErrorException('No orders found');
    }
    return orders[0][0];
  }

  async getHighestQuantityMeal() {
    // Get calculated order id from orders table
    const calculatedOrderId = await knex.raw(
      `
      SELECT calculated_order_id
      FROM orders
      `,
    );

    // Find calculated order with calculated order id
    const calculatedOrder = await knex.raw(
      `
      SELECT *
      FROM calculated_orders
      WHERE id = ${calculatedOrderId[0][0].calculated_order_id}
      `,
    );

    // Find the meal with the highest quantity
    let highestQuantity = 0;
    let highestQuantityMeal = null;

    for (const meal of calculatedOrder[0][0].meals) {
      const quantity = meal.quantity || 0;
      if (quantity > highestQuantity) {
        highestQuantity = quantity;
        highestQuantityMeal = meal;
      }
    }

    return {
      name: highestQuantityMeal.name,
      quantity: highestQuantityMeal.quantity,
    };
  }
}
