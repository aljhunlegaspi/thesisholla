import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import goalReducer from '../features/goals/goalSlice'
import requestReducer from '../features/requests/requestSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer,
    requests: requestReducer
  },
})
