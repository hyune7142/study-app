import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ConterState = {
  value: number
}

const initialState: ConterState = { value: 0 };

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    setNum: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    }
  }
})

export const { increment, decrement, setNum } = counterSlice.actions
export default counterSlice.reducer