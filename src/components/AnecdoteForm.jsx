import { useDispatch } from 'react-redux'
import { doAddAnecdote } from '../reducers/anecdoteReducer'


const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdote = (event) => {
        event.preventDefault()
        const newAnecdote = event.target.anecdoteInput.value
        event.target.anecdoteInput.value = ''
        dispatch(doAddAnecdote(newAnecdote))
    }

    return( 
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div><input name="anecdoteInput" /></div>
                <button name="addBtcn" type='submit'>create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm