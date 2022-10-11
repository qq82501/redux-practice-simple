import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  isCounterShown: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload.amount;
    },
    toggle(state) {
      state.isCounterShown = !state.isCounterShown;
    },
  },
});
console.log(counterSlice);

export const counterActions = counterSlice.actions;

export default counterSlice;
