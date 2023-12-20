import { createSlice } from '@reduxjs/toolkit'



export const infoSlice = createSlice({
    name: 'info',
    initialState: {
      info: ''
    },
    reducers: {
      setValue: (state, action) => {
        state.info = action.payload;
        console.log(action)
      },
    }
})

export const {setValue} = infoSlice.actions

export default infoSlice.reducer;

