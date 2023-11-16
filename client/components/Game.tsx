import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getProfileById } from '../apis/fruits'

function Game() {
  const { id } = useParams()
  const playerId = Number(id)

  const { isLoading, error, data } = useQuery({
    queryKey: ['profile'],
    queryFn: () => getProfileById(playerId),
  })

  if (isLoading) {
    return 'Loading...'
  }

  if (error) {
    return 'An error has occurred: ' + error
  }
  console.log(data[0])

  return (
    <>
      <div>
        <div>Player Name: {data[0].playerName}</div>
        <div>Player Balance: ${data[0].balance}</div>
      </div>
    </>
  )
}

export default Game
