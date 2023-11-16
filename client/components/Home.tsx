import { useQuery } from '@tanstack/react-query'
import { getAllProfiles } from '../apis/fruits'
import { Link } from 'react-router-dom'
import { Profiles } from '../../models/profiles'

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
      <div>
        Choose Player
        <ul>
          {data?.map((profiles: Profiles) => (
            <li key={profiles.id}>
              <Link to={`/game/${profiles.id}`}>
                {profiles.playerName} - {profiles.balance}
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
