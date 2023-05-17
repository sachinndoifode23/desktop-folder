import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = { points: 0 };
const incrementByAmt = createAction("account/incrementByAmount");
const bonusSlice = createSlice({
  name: "bonus",
  initialState,
  reducers: {
    increment(state) {
      state.points++;
    },
    decrement(state) {
      state.amount = state.points ? state.points - 1 : state.points;
    },
    incrementByAmount(state, action) {
      state.points += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementByAmt, (state, action) => {
      if (action.payload >= 100) {
        state.points++;
      }
    });
  },
});

export const { increment, decrement, incrementByAmount } = bonusSlice.actions;
export default bonusSlice.reducer;
