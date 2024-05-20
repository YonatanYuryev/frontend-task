import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./features/modal/modalSlice";
import dropdownSlice from "./features/dropdown/dropdownSlice";
import formSlice from "./features/form/formSlice";

export const store = configureStore({
  reducer: {
    dropdown: dropdownSlice,
    modal: modalSlice,
    form: formSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;