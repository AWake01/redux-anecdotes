import { createSlice, current } from "@reduxjs/toolkit"

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(state, action) {
      //console.log(current(state))
       return action.payload  
    }
  }
}

)

export const { setFilter } = filterSlice.actions
export default filterSlice.reducer