import { createSlice } from "@reduxjs/toolkit"

//const initialState = 'render here notification...'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    setNotification(state, action) {
       return action.payload  
    },
    clearNotification(state, action) {
       return ''  
    }
  }
})

const actions = notificationSlice.actions

export const showNotification = (notification, timeout) => {
  return async (dispatch) => {
    dispatch(actions.setNotification(notification, timeout))    

    setTimeout(() => {
    dispatch(actions.clearNotification())
    }, timeout)
  }
}


export const { setNotification, clearNotification } = notificationSlice.actions
export default notificationSlice.reducer