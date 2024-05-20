import { ChangeEvent, FC, useState } from "react";
import cls from "./Form.module.scss";
import { Dropdown } from "../../../../shared/ui/dropdown";
import { Button } from "../../../../shared/ui/button";
import { useAppDispatch, useAppSelector } from "../../../../hooks/storeHooks";
import FormInput from "./form-input/FormInput";
import { onClickDropdownItem, showDropdown } from "../../../../store/features/dropdown/dropdownSlice";
import { setOutputItems } from "../../../../store/features/output/outputSlice";
import { DropdownItem } from "../../../../store/features/dropdown/types";

interface FormProps {
  className?: string;
}

const Form: FC<FormProps> = (props) => {
  const { className } = props;
  const { items, isOpen, currentValue } = useAppSelector((state) => state.dropdown)
  const [inputValue, setInputValue] = useState<string>('');
  const dispatch = useAppDispatch();

  const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);

  const onClickItem = (item: DropdownItem) => {
    dispatch(onClickDropdownItem(item.label));
    dispatch(showDropdown(!isOpen));
    dispatch(setOutputItems(item))
  }


  return (
  <div className={[cls.Form, className].join(' ')}>
      <div className={cls.Controls}>
                <Dropdown 
                    visible={isOpen}
                    items={items} 
                    onClickDropdown={() => dispatch(showDropdown(!isOpen))} 
                    value={currentValue} 
                    onClickItem={onClickItem}
                />
                <FormInput 
                    inputValue={inputValue} 
                    onChangeInputValue={onChangeInputValue} 
                />
                <Button>Add</Button>
      </div>
      <div className={cls.Outputs}></div>
  </div>
  );
};

export default Form;
