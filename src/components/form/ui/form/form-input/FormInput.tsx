import { ChangeEvent, FC } from "react";
import cls from "./FormInput.module.scss";
import { Input } from "../../../../../shared/ui/input";

interface FormInputProps {
  className?: string;
  inputValue: string;
  onChangeInputValue: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: FC<FormInputProps> = (props) => {
  const { className, inputValue, onChangeInputValue } = props;
  const startsWithSlash = inputValue.startsWith('/');
  return (
    <label className={[cls.FormInput, className].join(' ')} htmlFor="input">
        <Input 
              value={inputValue} 
              onChange={onChangeInputValue} 
              placeholder="e.g./index.php"
              id="input"
        />
        {!startsWithSlash && !!inputValue.length && <p className={cls.Tooltip}>URLs must start with "/"</p>}
  </label>);
};

export default FormInput;
