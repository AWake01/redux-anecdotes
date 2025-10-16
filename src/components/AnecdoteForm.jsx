import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, clearNotification } from '../reducers/notificationReducer'
import { createAnecdote } from '../reducers/anecdoteReducer'


const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const newAnecdote = async (event) => {
        event.preventDefault()
        const content= event.target.anecdoteInput.value
        event.target.anecdoteInput.value = ''
        dispatch(createAnecdote(content))

        dispatch(setNotification(`'${content}' was added`))    
        setTimeout(() => {
            dispatch(clearNotification())
        }, 5000)
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