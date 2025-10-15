import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setNotification, clearNotification } from '../reducers/notificationReducer'


const Anecdote = ({ anecdote, handleClick }) => {
    const dispatch = useDispatch()
    //const anecdote = useSelector(state.anecdote => state.anecdote.id === id)
    //console.log(anecdote.content)

    const anecdoteStyle = {
        marginBottom: 1,
        marginTop: 1,
    } 

     const buttonStyle = {
        marginLeft: 5,
    } 

    const vote = () => {
        handleClick()
        
        dispatch(setNotification(`You voted '${anecdote.content}'`))    
        setTimeout(() => {
            dispatch(clearNotification())
        }, 5000)
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
                    handleClick={() => dispatch(vote(anecdote.id))}
                />
            )}
        </div>
    )
}

export default AnecdoteList