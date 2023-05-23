import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  // Order Total Amount History
  await knex.schema.createTable('order_total_amount_histories', (table) => {
    table.uuid('id').primary();
    table.uuid('order_id');
    table.timestamp('time');
    table.decimal('total_amount');

    table.foreign('order_id').references('id').inTable('orders');
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('order_total_amount_histories');
}
