import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PayloadItem, InitialState } from "./types";

const initialState: InitialState = {
  items: []
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addFormItem(state, action: PayloadAction<PayloadItem>) {
      const { currentValue, inputValue } = action.payload;
      const existingItemIndex = state.items.findIndex(item => item[currentValue] !== undefined);
      console.log(state.items);

      if (existingItemIndex === -1) {
        const newItem = { [currentValue]: [inputValue] };
        return {
          ...state,
          items: [...state.items, newItem]
        };
      } else {
        const updatedItems = state.items.map((item, index) => {
          if (index === existingItemIndex) {
            return {
              ...item,
              [currentValue]: [...item[currentValue], inputValue]
            };
          }
          return item;
        });
        return {
          ...state,
          items: updatedItems
        };
      }
    },
    removeFormItem(state, action: PayloadAction<{ label: string, value: string }>) {
      const { label, value } = action.payload;

      state.items = state.items.filter(item => {
        if (item.hasOwnProperty(label)) {
          const updatedValues = item[label].filter(v => v !== value);
          item[label] = updatedValues;
        }
        return Object.values(item).some(array => array.length > 0);
      });
    }
  }
});

export const { addFormItem, removeFormItem } = formSlice.actions;
export default formSlice.reducer;