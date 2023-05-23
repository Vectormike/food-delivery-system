import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  // Calculated Orders
  await knex.schema.createTable('calculated_orders', (table) => {
    table.uuid('id').primary();
    table.string('total_amount');
    table.boolean('free_delivery');
    table.string('delivery_fee');
    table.string('service_charge');
    table.json('address_details');
    table.json('meals');
    table.integer('amount');
    table.integer('internal_profit');
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('calculated_orders');
}
