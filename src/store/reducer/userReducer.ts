import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserState, UserValue } from './types'

const initialState = {
  value: { user: '' }
} as UserState

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    addUser: (state: UserState, action: PayloadAction<UserValue>) => {
      state.value = action.payload
    }
  }
})

export const { addUser } = userSlice.actions
export const userReducer = userSlice.reducer
