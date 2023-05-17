import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { amount: 1 };

export const getUserAcc = createAsyncThunk(
  "account/getUser",
  async (id, thunkAPI) => {
    const { data } = await axios.get("http://localhost:8080/accounts/" + id);
    return data.amount;
  }
);

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    increment(state) {
      state.amount++;
    },
    decrement(state) {
      state.amount = state.amount ? state.amount - 1 : state.amount;
    },
    incrementByAmount(state, action) {
      state.amount += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserAcc.fulfilled, (state, action) => {
      state.amount = action.payload;
      state.pending = false;
    });
    builder.addCase(getUserAcc.pending, (state, action) => {
      state.pending = true;
    });
    builder.addCase(getUserAcc.rejected, (state, action) => {
      state.error = action.error;
    });
  },
});

export const { increment, decrement, incrementByAmount } = accountSlice.actions;
export default accountSlice.reducer;
