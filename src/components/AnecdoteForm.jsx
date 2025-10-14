import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'


const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const newAnecdote = (event) => {
        event.preventDefault()
        const newAnecdote = event.target.anecdoteInput.value
        event.target.anecdoteInput.value = ''
        dispatch(addAnecdote(newAnecdote))
    }

    return( 
        <div>
            <h2>create new</h2>
            <form onSubmit={newAnecdote}>
                <div><input name="anecdoteInput" /></div>
                <button name="addBtcn" type='submit'>create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm