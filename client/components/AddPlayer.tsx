import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addPlayer } from '../apis/fruits'

function AddPlayer() {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (newPlayer: string) => addPlayer(newPlayer),
    onSuccess: () => {
      queryClient.invalidateQueries(['profiles'])
    },
  })

  function handlAddPlayerSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const newPlayer = form.get('newPlayer')?.valueOf() as string
    mutation.mutate(newPlayer)
    e.currentTarget.reset()
  }

  return (
    <>
      <div>Add Player</div>
      <form onSubmit={handlAddPlayerSubmit}>
        <input type="text" name="newPlayer" placeholder="Your name" />
      </form>
    </>
  )
}
export default AddPlayer
