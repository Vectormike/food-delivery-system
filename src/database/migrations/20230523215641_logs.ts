import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  // Logs
  await knex.schema.createTable('logs', (table) => {
    table.uuid('id').primary();
    table.uuid('order_id');
    table.timestamp('time');
    table.string('description');

    table.foreign('order_id').references('id').inTable('orders');
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('logs');
}
