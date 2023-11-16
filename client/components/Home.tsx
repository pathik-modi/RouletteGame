import { useQuery } from '@tanstack/react-query'
import { getAllProfiles } from '../apis/fruits'
import { Link } from 'react-router-dom'

function Home() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['profiles'],
    queryFn: () => getAllProfiles(),
  })
  if (isLoading) {
    return 'loading...'
  }

  if (error) {
    return 'An error has occurred: ' + error
  }

  return (
    <>
      <div>Home Page</div>
      <div>Start Game</div>
      <div>
        Choose Player
        <ul>
          {data?.map((profile) => (
            <li key={profile.id}>
              <Link to={`/game/${profile.id}`}>
                {profile.player} - {profile.balance}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        Add new Player
        <form></form>
      </div>
    </>
  )
}

export default Home
