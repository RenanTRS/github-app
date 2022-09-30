import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { StateValue, themeState } from './types'

const initialState = {
  value: { theme: 'dark' }
} as StateValue

const themeSlice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    changeTheme: (state: StateValue, action: PayloadAction<themeState>) => {
      state.value = action.payload
    }
  }
})

export const { changeTheme } = themeSlice.actions
export const themeReducer = themeSlice.reducer
