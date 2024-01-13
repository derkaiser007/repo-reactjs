import { configureStore } from '@reduxjs/toolkit'
import { SliceReducer } from './Slice'

export const store = configureStore({
    reducer: {
        counter: SliceReducer
    }
})

