import { useSelector, useDispatch } from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import { doVote } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state).sort((a,b) => b.votes - a.votes)
  const dispatch = useDispatch()

  return (
    <div>
      <AnecdoteList/>
      <AnecdoteForm/>
    </div>
  )
}

export default App