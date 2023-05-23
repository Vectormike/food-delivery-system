import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('orders', (table) => {
    table.uuid('id').primary();
    table.uuid('user_id');
    table.boolean('completed').defaultTo(false);
    table.boolean('cancelled').defaultTo(false);
    table.boolean('kitchen_cancelled').defaultTo(false);
    table.boolean('kitchen_accepted').defaultTo(false);
    table.boolean('kitchen_dispatched').defaultTo(false);
    table.timestamp('kitchen_dispatched_time');
    table.timestamp('completed_time');
    table.uuid('rider_id');
    table.boolean('kitchen_prepared').defaultTo(false);
    table.boolean('rider_assigned').defaultTo(false);
    table.boolean('paid').defaultTo(false);
    table.string('order_code');
    table.string('order_change').nullable();
    table.uuid('calculated_order_id');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.jsonb('logs');
    table.timestamp('kitchen_verified_time');
    table.timestamp('kitchen_completed_time');
    table.boolean('shop_accepted').defaultTo(false);
    table.boolean('shop_prepared').defaultTo(false);
    table.integer('no_of_mealbags_delivered').defaultTo(0);
    table.integer('no_of_drinks_delivered').defaultTo(0);
    table.timestamp('rider_started_time').nullable();
    table.boolean('rider_started').defaultTo(false);
    table.timestamp('rider_arrived_time').nullable();
    table.boolean('rider_arrived').defaultTo(false);
    table.boolean('is_failed_trip').defaultTo(false);
    table.jsonb('failed_trip_details');
    table.string('box_number');
    table.uuid('shelf_id').nullable();
    table.jsonb('order_total_amount_history');
    table.boolean('scheduled').defaultTo(false);
    table.uuid('confirmed_by_id').nullable();
    table.uuid('completed_by_id').nullable();
    table.date('scheduled_delivery_date').nullable();
    table.time('scheduled_delivery_time').nullable();
    table.boolean('is_hidden').defaultTo(false);
    table.uuid('calculated_order');
    table.uuid('order_type');

    table.foreign('user_id').references('id').inTable('users');
    table.foreign('rider_id').references('id').inTable('riders');
    table
      .foreign('calculated_order_id')
      .references('id')
      .inTable('calculated_orders');
    table.foreign('shelf_id').references('id').inTable('shelves');
    table.foreign('confirmed_by_id').references('id').inTable('users');
    table.foreign('completed_by_id').references('id').inTable('users');
    table
      .foreign('calculated_order')
      .references('id')
      .inTable('calculated_orders');
    table.foreign('order_type').references('id').inTable('order_types');
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('orders');
}
