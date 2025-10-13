import ReactDOM from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import App from './App'
import anecdoteReducter from './reducers/anecdoteReducer'
import filterReducter from './reducers/filterReducer'

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducter,
    filter: filterReducter
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)