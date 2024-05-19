import { FC, InputHTMLAttributes } from "react";
import cls from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: FC<InputProps> = (props) => {
  const { className, ...otherProps } = props;
  return <input className={[cls.Input, className].join(' ')} {...otherProps} />;
};

export default Input;
