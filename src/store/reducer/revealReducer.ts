import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RevealValue, StateReveal } from './types'

const initialState = {
  value: { reveal: -100 }
} as StateReveal

const revealSlice = createSlice({
  name: 'reveal',
  initialState: initialState,
  reducers: {
    show: (state: StateReveal, action: PayloadAction<RevealValue>) => {
      state.value = action.payload
    }
  }
})

export const { show } = revealSlice.actions
export const revealReducer = revealSlice.reducer
