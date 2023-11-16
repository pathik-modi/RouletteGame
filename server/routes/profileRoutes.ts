import { Router } from 'express'
import { getAllPlayers, getOnePlayer, updateBalance } from '../db/dbFunctions'

const router = Router()

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
