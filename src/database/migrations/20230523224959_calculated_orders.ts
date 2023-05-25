import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  // Calculated Orders
  await knex.schema.createTable('calculated_orders', (table) => {
    table.increments('id').primary();
    table.decimal('total_amount', 10, 2).nullable();
    table.boolean('free_delivery').nullable();
    table.decimal('delivery_fee', 10, 2).nullable();
    table.decimal('service_charge', 10, 2).nullable();
    table.jsonb('address_details').nullable();
    table.jsonb('meals').nullable();
    table.string('lat').nullable();
    table.string('lng').nullable();
    table.string('cokitchen_polygon_id').nullable();
    table.string('user_id').nullable();
    table.string('cokitchen_id').nullable();
    table.boolean('pickup').nullable();
    table.string('prev_price').nullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('calculated_orders');
}
