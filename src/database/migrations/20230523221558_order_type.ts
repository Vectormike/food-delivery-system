import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  // Order Type
  await knex.schema.createTable('order_types', (table) => {
    table.uuid('id').primary();
    table.string('name').notNullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('order_types');
}
