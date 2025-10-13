import { useSelector, useDispatch } from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import { doVote } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state).sort((a,b) => b.votes - a.votes)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => dispatch(doVote(anecdote.id))}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <AnecdoteForm></AnecdoteForm>
    </div>
  )
}

export default App