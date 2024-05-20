import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./features/modal/modalSlice";
import dropdownSlice from "./features/dropdown/dropdownSlice";
import outputSlice from "./features/output/outputSlice";

export const store = configureStore({
  reducer: {
    dropdown: dropdownSlice,
    modal: modalSlice,
    output: outputSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;