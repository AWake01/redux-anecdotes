import { configureStore } from '@reduxjs/toolkit'
import anecdoteReducter from './reducers/anecdoteReducer'
import filterReducter from './reducers/filterReducer'

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducter,
    filter: filterReducter
  }
})

export default store