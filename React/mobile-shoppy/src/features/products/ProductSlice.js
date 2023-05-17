import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  productList: [],
};
export const asyncGetProductList = createAsyncThunk(
  "product/getList",
  async (state, thunkAPI) => {
    const { data } = await axios
      .get("https://dummyjson.com/products?limit=100")
      .then((resp) => {
        return resp;
      });
    return data;
  }
);
const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.productList = [...action.payload, ...state.productList];
    },
    updateItem: (state, action) => {
      state.productList = state.productList.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
    deleteItem: (state, action) => {
      state.productList = state.productList.filter((item) =>
        item.id !== action.payload.id ? action.payload : item
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncGetProductList.fulfilled, (state, action) => {
      state.productList = action.payload;
    });
  },
});

export const { addItem, deleteItem, updateItem } = ProductSlice.actions;
export default ProductSlice.reducer;
