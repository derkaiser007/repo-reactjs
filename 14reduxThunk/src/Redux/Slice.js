import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchData = createAsyncThunk('fetchData', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    return response.json()
})

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state, action) => {
            state.isLoading = true
            state.data = null
            state.isError = false
        });
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
            state.isError = false
        });
        builder.addCase(fetchData.rejected, (state, action) => {
            state.isLoading = false
            state.data = null
            state.isError = true
        })
    }
})

export default dataSlice.reducer