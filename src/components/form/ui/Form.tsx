import { ChangeEvent, FC, useState } from "react";
import cls from "./Form.module.scss";
import { Dropdown } from "../../../shared/ui/dropdown";
import { Button } from "../../../shared/ui/button";
import { useAppDispatch, useAppSelector } from "../../../hooks/storeHooks";
import { onClickDropdownItem, showDropdown } from "../../../store/features/dropdown/dropdownSlice";
import { addFormItem } from "../../../store/features/form/formSlice";
import { DropdownItem } from "../../../store/features/dropdown/types";
import { Output } from "./output";
import { FormInput } from "./form-input";

interface FormProps {
  className?: string;
}

const Form: FC<FormProps> = (props) => {
  const { className } = props;
  const { items, isOpen, currentValue } = useAppSelector((state) => state.dropdown)
  const [inputValue, setInputValue] = useState<string>('');
  const dispatch = useAppDispatch();

  const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);

  const startsWithSlash = inputValue.startsWith('/');

  const onClickAdd = () => {
    if (!startsWithSlash) return;
    dispatch(addFormItem({ currentValue, inputValue }));
  }

  const onClickDropdown = () => dispatch(showDropdown(!isOpen));

  const onClickItem = (item: DropdownItem) => dispatch(onClickDropdownItem(item.label));


  return (
  <div className={[cls.Form, className].join(' ')}>
      <div className={cls.Controls}>
          <Dropdown 
              visible={isOpen}
              items={items} 
              onClickDropdown={onClickDropdown} 
              value={currentValue} 
              onClickItem={onClickItem}
          />
          <FormInput
              startsWithSlash={startsWithSlash} 
              inputValue={inputValue} 
              onChangeInputValue={onChangeInputValue} 
          />
          <Button onClick={onClickAdd}>Add</Button>
      </div>
      <Output />
  </div>
  );
};

export default Form;
