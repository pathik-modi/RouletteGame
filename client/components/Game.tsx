import { useParams } from 'react-router-dom'

function Game() {
  const { id } = useParams()
  console.log(id)

  return <div>Game Page</div>
}

export default Game
