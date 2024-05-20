export type InitialState = {
  items: FormItem[]
};

export type PayloadItem = {
  currentValue: string;
  inputValue: string;
}

export type FormItem = Record<string, string[]>