import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  // Logs
  await knex.schema.createTable('logs', (table) => {
    table.increments('id').primary();
    table.integer('order_id').nullable();
    table.string('time').nullable();
    table.text('description').nullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('logs');
}
