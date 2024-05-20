import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InitialState } from "./types";

enum DropdownValues {
  EQUALS = 'EQUALS',
  NOT_EQUALS = 'NOT_EQUALS',
  CONTAINS = 'CONTAINS',
  NOT_CONTAINS = 'NOT_CONTAINS',
  PREFIX = 'PREFIX',
  SUFFIX = 'SUFFIX'
}

enum DropdownLabels {
  EQUALS = 'URL is',
  NOT_EQUALS = 'URL is not',
  CONTAINS = 'URL contains',
  NOT_CONTAINS = 'URL not contains',
  PREFIX = 'URL starts with',
  SUFFIX = 'URL ends with'
}

const dropdownItems = [
  { value: DropdownValues.EQUALS, label: DropdownLabels.EQUALS },
  { value: DropdownValues.NOT_EQUALS, label: DropdownLabels.NOT_EQUALS },
  { value: DropdownValues.CONTAINS, label: DropdownLabels.CONTAINS },
  { value: DropdownValues.NOT_CONTAINS, label: DropdownLabels.NOT_CONTAINS },
  { value: DropdownValues.PREFIX, label: DropdownLabels.PREFIX },
  { value: DropdownValues.SUFFIX, label: DropdownLabels.SUFFIX },
]

const initialState: InitialState = {
  items: dropdownItems,
  currentValue: dropdownItems[0].label,
  isOpen: false,
}

export const dropdownSlice = createSlice({
  name: 'dropdown',
  initialState,
  reducers: {
    showDropdown(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
    onClickDropdownItem(state, action: PayloadAction<string>) {
      return {
        ...state, 
        currentValue: action.payload, 
        isOpen: !state.isOpen
      }
    }
  },
})

export const { showDropdown , onClickDropdownItem } = dropdownSlice.actions;
export default dropdownSlice.reducer;