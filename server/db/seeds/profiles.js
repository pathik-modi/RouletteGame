/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('profiles').del()
  await knex('profiles').insert([
    { id: 1, playerName: 'Xavier', balance: 2500 },
    { id: 2, playerName: 'Will', balance: 2500 },
    { id: 3, playerName: 'Pathik', balance: 2500 },
    { id: 4, playerName: 'Cong', balance: 2500 },
  ])
}
