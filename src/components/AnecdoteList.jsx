import { useSelector, useDispatch } from 'react-redux'
import { doVote } from '../reducers/anecdoteReducer'
const Anecdote = ({ anecdote, handleClick }) => {
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                {anecdote.content}
            </div>
                <div>
                    has {anecdote.votes}
                <button onClick={handleClick}>vote</button>
            </div>
        </div>
    )
}

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(({ anecdotes, filter }) => {
        anecdotes.sort((a,b) => b.votes - a.votes)  //Sort by votes desc
        if(filter === ''){
            return anecdotes 
        }
        return anecdotes.filter( anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))    //Filter by search text
    })

    return( 
        <div>
            <h2>Anecdotes</h2>
            {anecdotes.map(anecdote =>
                <Anecdote 
                    key={anecdote.id} 
                    anecdote={anecdote} 
                    handleClick={() => dispatch(doVote(anecdote.id))}/>
            )}
        </div>
    )
}

export default AnecdoteList