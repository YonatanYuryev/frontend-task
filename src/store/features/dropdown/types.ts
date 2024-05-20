export type InitialState = {
  items: DropdownItem[],
  currentValue: string;
  isOpen: boolean,
}

export type DropdownItem = {
  value: string;
  label: string;
}