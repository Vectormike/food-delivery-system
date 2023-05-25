import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('orders', (table) => {
    table.increments('id').primary();
    table.integer('user_id').notNullable();
    table.boolean('completed').nullable();
    table.boolean('cancelled').nullable();
    table.boolean('kitchen_cancelled').nullable();
    table.boolean('kitchen_accepted').nullable();
    table.boolean('kitchen_dispatched').nullable();
    table.string('kitchen_dispatched_time');
    table.timestamp('completed_time').defaultTo(knex.fn.now());
    table.integer('rider_id');
    table.boolean('kitchen_prepared').nullable();
    table.boolean('rider_assigned').nullable();
    table.boolean('paid').nullable();
    table.string('order_code');
    table.string('order_change');
    table.integer('calculated_order_id').nullable();
    table.string('kitchen_verified_time');
    table.string('kitchen_completed_time');
    table.boolean('shop_accepted').nullable();
    table.boolean('shop_prepared').nullable();
    table.integer('no_of_mealbags_delivered').nullable();
    table.integer('no_of_drinks_delivered').nullable();
    table.timestamp('rider_started_time').nullable();
    table.boolean('rider_started').nullable();
    table.timestamp('rider_arrived_time').nullable();
    table.boolean('rider_arrived').nullable();
    table.boolean('is_failed_trip').nullable();
    table.text('failed_trip_details');
    table.string('box_number');
    table.integer('shelf_id');
    table.boolean('scheduled').nullable();
    table.integer('confirmed_by_id');
    table.integer('completed_by_id');
    table.date('scheduled_delivery_date');
    table.time('scheduled_delivery_time');
    table.boolean('is_hidden').nullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('orders');
}
