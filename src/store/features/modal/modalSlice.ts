import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "./types";

const initialState: InitialState = {
  isOpen: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    onClose(state, action) {
      state = { ...state, isOpen: action.payload}
    },
    onOpen(state, action) {
      state = { ...state, isOpen: action.payload}
    },
  },
});

export const { onClose, onOpen } = modalSlice.actions;
export default modalSlice.reducer;