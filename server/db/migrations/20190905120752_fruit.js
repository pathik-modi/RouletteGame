export async function up(knex) {
  return knex.schema.createTable('fruit', (table) => {
    table.increments('id')
    table.string('playerName')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('fruit')
}
