import { configureStore } from '@reduxjs/toolkit'
import { themeReducer } from './reducer/themeReducer'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'
import { userReducer } from './reducer/userReducer'

//persist
const persistConfig = {
  key: 'root',
  version: 1,
  storage
}
const reducer = combineReducers({
  themeR: themeReducer
})
const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: {
    theme: persistedReducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
})
