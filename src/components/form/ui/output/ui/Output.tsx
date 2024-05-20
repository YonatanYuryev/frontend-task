import { FC } from "react";
import cls from "./Output.module.scss";
import { useAppDispatch, useAppSelector } from "../../../../../hooks/storeHooks";
import { FormItem } from "../../../../../store/features/form/types";
import { MdClear } from "react-icons/md";
import { removeFormItem } from "../../../../../store/features/form/formSlice";

interface OutputProps {
  className?: string;
}

const Output: FC<OutputProps> = (props) => {
  const { className } = props;
  const { items } = useAppSelector(state => state.form);
  const dispatch = useAppDispatch();
  return (
  <div className={[cls.Output, className].join(' ')}>
      <ul className={cls.OutputList}>
        {items?.map((output: FormItem) => {
          const label: string = `${Object.keys(output)}`;
          return (
            <li className={cls.OutputItem} key={label}>
              <p className={cls.OutputLabel}>{label}:</p>
              <ul className={cls.OutputValuesBlock}>
              {output[label].map(value => (
                  <li key={value} className={cls.OutputLink}>
                     <p>{value}</p>
                     <MdClear className={cls.RemoveButton} onClick={() => dispatch(removeFormItem({ label, value }))} />
                  </li>
              ))}
              </ul>
            </li>
        )})}
      </ul>
  </div>
  );
};

export default Output;
