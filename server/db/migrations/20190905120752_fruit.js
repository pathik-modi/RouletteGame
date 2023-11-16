export async function up(knex) {
  return knex.schema.createTable('profiles', (table) => {
    table.increments('id')
    table.string('playerName')
    table.integer('balance')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('profiles')
}
