import { configureStore } from "@reduxjs/toolkit";
import dropdownSlice from "./features/dropdown/dropdownSlice";
import modalSlice from "./features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    dropdown: dropdownSlice,
    modal: modalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;