import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "./types";

const initialState: InitialState = {
  items: []
}

export const outputSlice = createSlice({
  name: 'output',
  initialState,
  reducers: {
    setOutputItems(state, action) {
      const { value, label } = action.payload;
      state.items = state.items.map();
    }
  }
});

export const { setOutputItems } = outputSlice.actions;
export default outputSlice.reducer;