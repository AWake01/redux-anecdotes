const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  // return state

  switch(action.type) {
    case 'VOTE': {
      const id = action.payload
      const voteToChange = state.find(n => n.id === id)
      const changedVote = {
          ...voteToChange,
          votes : voteToChange.votes + 1
      }
      //A new state is then returned. We create it by taking all of the notes from the old state except for the desired note,
      //which we replace with its slightly altered copy:
      return state.map(vote => 
        vote.id !== id ? vote : changedVote
      )
    }
     case 'ADD_ANECDOTE': {
        return state.concat( 
        { 
          content: action.payload,
          id: getId(),
          votes: 0
        }
      )
    }
    default: return state
  }
}

//Action creators
export const doAddAnecdote = text => {
  return { type: 'ADD_ANECDOTE', payload: text }
}
export const doVote = id => {
  return { type: 'VOTE', payload: id }
}

export default reducer