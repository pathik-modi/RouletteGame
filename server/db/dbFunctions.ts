import { Profiles, AddPlayer } from '../../models/profiles'
import db from './connection'

// Fuction to read all profiles from data

export async function getAllPlayers(): Promise<Profiles[]> {
  return db('profiles').select()
}

// Function to update player balance by id.

export async function updateBalance(id: number, newBalance: number) {
  return db('profiles').where({ id }).update({ balance: newBalance })
}

// Function to add a new player to the database.

export async function addPlayer(player: AddPlayer) {
  return db('profiles').insert(player)
}

// Function to delete player from database.

export async function delPlayer(id: number) {
  return db('profiles').where({ id }).del()
}

//get one player with id

export async function getOnePlayer(id: number) {
  return db('profiles').where({ id }).select()
}
