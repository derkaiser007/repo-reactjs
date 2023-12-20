import { configureStore } from '@reduxjs/toolkit'
import infoReducer from '../features/info/infoSlice'
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, infoReducer)

export const store = configureStore({
    reducer: {
        value: persistedReducer,
    },
  })
  
export const persistor = persistStore(store)