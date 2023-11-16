import request from 'superagent'

const rootUrl = '/api/v1'

export function getFruits(): Promise<string[]> {
  return request.get(rootUrl + '/fruits').then((res) => {
    return res.body.fruits
  })
}

export async function getAllProfiles() {
  const response = await request.get(rootUrl)
  return response.body
}

export async function addPlayer(playerName) {
  return await request.post(rootUrl).send({ playerName })
}
