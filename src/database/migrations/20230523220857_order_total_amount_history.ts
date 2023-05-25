import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  // Order Total Amount History
  await knex.schema.createTable('order_total_amount_histories', (table) => {
    table.increments('id').primary();
    table.integer('order_id').nullable();
    table.string('time').nullable();
    table.decimal('total_amount', 10, 2).nullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('order_total_amount_histories');
}
