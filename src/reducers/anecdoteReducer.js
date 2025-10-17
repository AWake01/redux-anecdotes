import { createSlice, current} from "@reduxjs/toolkit"
import annecdoteService from '../services/anecdotes'

//const getId = () => (100000 * Math.random()).toFixed(0)

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState: [],
  reducers: {
    vote(state, action) {
      console.log("voted")
      const id = action.payload
      const anecdoteToChange = state.find(n => n.id === id)
      console.log(current(anecdoteToChange))
      const changedAnecdote = {
          ...anecdoteToChange,
          votes : anecdoteToChange.votes + 1
      }

      return state.map(anecdote => 
        anecdote.id !== id ? anecdote : changedAnecdote
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

const { setAnecdotes, addAnecdote, vote } = anecdoteSlice.actions

export const initilizeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await annecdoteService.getAnecdotes()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await annecdoteService.createAnecdote(content)
    dispatch(addAnecdote(newAnecdote))
  }
}

export const voteForAnecdote = (id) => {
  return async (dispatch) => {
    await annecdoteService.vote(id) //Update vote in database
    dispatch(vote(id))  //update vote in store
  }
}


export default anecdoteSlice.reducer