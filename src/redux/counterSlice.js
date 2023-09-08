import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: state => state+1,
        decrement: state => state-1,
        incrementByAmount: (state, action) => state + action.payload,
        reset: () => 0
    }
})

export const {increment, decrement, reset, incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;