import { createSlice } from '@reduxjs/toolkit'

const Slice = createSlice({
    name: 'counter',
    initialState: {count: 0},
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        }
    }
})

export const { increment, decrement} = Slice.actions

export const SliceReducer = Slice.reducer