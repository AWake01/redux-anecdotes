import { configureStore } from '@reduxjs/toolkit'
import anecdoteReducter from './reducers/anecdoteReducer'
import filterReducter from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducter,
    filter: filterReducter, 
    notification: notificationReducer
  }
})

export default store