export async function up(knex) {
  return knex.schema.createTable('profiles', (table) => {
    table.increments('id')
    table.string('playerName')
    table.integer('balance').defaultTo(2500)
  })
}

export async function down(knex) {
  return knex.schema.dropTable('profiles')
}
