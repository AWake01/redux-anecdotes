import { useSelector, useDispatch } from 'react-redux'
import { voteForAnecdote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote }) => {
    const dispatch = useDispatch()

    const anecdoteStyle = {
        marginBottom: 1,
        marginTop: 1,
    } 

     const buttonStyle = {
        marginLeft: 5,
    } 

    const vote = () => {
        dispatch(voteForAnecdote(anecdote.id))
        dispatch(showNotification(`You voted ${anecdote.content}`, 5000))
    }

    return (
        <div style={anecdoteStyle}>
            <div>
                {anecdote.content}
            </div>
                <div>
                    has {anecdote.votes}
                <button onClick={vote} style={buttonStyle}>vote</button>
            </div>
        </div>
    )
}

const AnecdoteList = () => {
    const dispatch = useDispatch()

    const anecdotes = useSelector(({ anecdotes, filter }) => {
        const sortedAnecdotes = [...anecdotes].sort((a,b) => b.votes - a.votes)  //Sort by votes desc
        if(filter === ''){
            return sortedAnecdotes 
        }
        return sortedAnecdotes.filter( anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))    //Filter by search text
    })

    return( 
        <div>
            {anecdotes.map(anecdote =>
                <Anecdote 
                    key={anecdote.id} 
                    anecdote={anecdote}
                />
            )}
        </div>
    )
}

export default AnecdoteList