import { createSlice } from "@reduxjs/toolkit"
import annecdoteService from '../services/anecdotes'

// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]

const getId = () => (100000 * Math.random()).toFixed(0)

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0
//   }
// }

//const initialState = anecdotesAtStart.map(asObject)

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState: [],
  reducers: {
    vote(state, action) {
      const id = action.payload
      const voteToChange = state.find(n => n.id === id)
      const changedVote = {
          ...voteToChange,
          votes : voteToChange.votes + 1
      }
      return state.map(vote => 
        vote.id !== id ? vote : changedVote
      )
    },
    addAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) { //Inital anecdotes
      return action.payload
    }
  }
})

export const { setAnecdotes } = anecdoteSlice.actions

export const initilizeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await annecdoteService.getAnecdotes()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const { vote, addAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer