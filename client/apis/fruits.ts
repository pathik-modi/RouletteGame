import request from 'superagent'

const rootUrl = '/api/v1/game'

export async function getAllProfiles() {
  const response = await request.get(rootUrl)
  return response.body
}

// export async function addPlayer(playerName) {
//   return await request.post(rootUrl).send({ playerName })
// }

export async function getProfileById(id: number) {
  return await request.get(`${rootUrl}/${id}`).then((res) => res.body)
}
