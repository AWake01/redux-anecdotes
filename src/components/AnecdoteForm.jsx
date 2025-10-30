import { useDispatch } from 'react-redux'
//import { setNotification, clearNotification } from '../reducers/notificationReducer'
import { showNotification } from '../reducers/notificationReducer'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { useField } from '../hooks'


const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const anecdoteField = useField('text')

    const newAnecdote = async (event) => {
        event.preventDefault()
        const content= anecdoteField.value
        anecdoteField.value = ''
        dispatch(createAnecdote(content))

        dispatch(showNotification(content, 5000))
    }

    return( 
        <div>
            <h2>create new</h2>
            <form onSubmit={newAnecdote}>
                <div><input {...anecdoteField} /></div>
                <button name="addBtn" type='submit'>create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm