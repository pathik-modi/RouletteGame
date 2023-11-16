import { Router } from 'express'
import {
  addPlayer,
  getAllPlayers,
  getOnePlayer,
  updateBalance,
} from '../db/dbFunctions'

const router = Router()

// Get all profiles from database
router.get('/', async (req, res) => {
  try {
    const player = await getAllPlayers()
    res.json(player)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'woopsie server error' })
  }
})

export default router

// Update players balance inside database
router.patch('/:id', async (req, res) => {
  const id = Number(req.params.id)
  const { balance } = req.body
  try {
    await updateBalance(id, balance)
    res.sendStatus(200)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'woopsie server error' })
  }
})

// Get a specific players details by their id
router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const player = await getOnePlayer(id)
    res.json(player)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'woopsie server error' })
  }
})

// Add a new player profile to the database
router.post('/', async (req, res) => {
  const newPLayer = req.body
  try {
    await addPlayer(newPLayer)
    res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'woopsie server error' })
  }
})
