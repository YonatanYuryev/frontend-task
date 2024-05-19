import { ChangeEvent, FC, useState } from "react";
import cls from "./Form.module.scss";
import { Dropdown } from "../../../../shared/ui/dropdown";
import { Input } from "../../../../shared/ui/input";
import { Button } from "../../../../shared/ui/button";
import { useAppDispatch, useAppSelector } from "../../../../hooks/storeHooks";
import { onClickDropdownItem, showDropdown } from "../../../../store/features/dropdown/dropdownSlice";

interface FormProps {
  className?: string;
}

const Form: FC<FormProps> = (props) => {
  const { className } = props;
  const { items, isOpen, currentValue } = useAppSelector((state) => state.dropdown)
  const [inputValue, setInputValue] = useState<string>('');
  const dispatch = useAppDispatch();

  const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);

  const startsWithSlash = inputValue[0] === '/';

  return <div className={[cls.Form, className].join(' ')}>
    <div className={cls.Controls}>
    <Dropdown 
            visible={isOpen}
            items={items} 
            onClickDropdown={() => dispatch(showDropdown(!isOpen))} 
            value={currentValue} 
            onClickItem={(value: string) => dispatch(onClickDropdownItem(value))}
    />
    <label htmlFor="input">
    <Input 
          value={inputValue} 
          onChange={onChangeInputValue} 
          placeholder="e.g./index.php"
          className={startsWithSlash === false ? cls.inCorrectInput : ''}
          id="input"
     />
     {startsWithSlash && <p>URLs must start with "/"</p>}
    </label>
     <Button>Add</Button>
    </div>
    <div className={cls.Outputs}></div>
  </div>;
};

export default Form;
