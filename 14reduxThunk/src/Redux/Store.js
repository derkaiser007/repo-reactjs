import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './Slice'
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'data',
    storage,
}

const persistedReducer = persistReducer(persistConfig, dataReducer)

export const store = configureStore({
    reducer: {
        data: persistedReducer,
    },
  })
  
export const persistor = persistStore(store)