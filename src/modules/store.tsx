import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger';
import counterReducer from './counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer
  },
  middleware: getDefaultMiddleware => (
    getDefaultMiddleware().concat(logger)
  )
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store