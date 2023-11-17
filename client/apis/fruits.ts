import request from 'superagent'

const rootUrl = '/api/v1/game'

export async function getAllProfiles() {
  const response = await request.get(rootUrl)
  return response.body
}

export async function getProfileById(id: number) {
  return await request.get(`${rootUrl}/${id}`).then((res) => res.body)
}
interface Props {
  id: number
  balance: number
}
export async function updatePlayerBalance(id: number, balance: number) {
  return await request.patch(`${rootUrl}/${id}`).send({ balance: balance })
}

export async function addPlayer(playerName: string) {
  return await request.post(rootUrl).send({ playerName })
}
