import { FC } from "react";
import cls from "./ModalOutput.module.scss";
import { useAppSelector } from "../../../hooks/storeHooks";
import { FormItem } from "../../../store/features/form/types";

interface ModalOutputProps {
  className?: string;
}

const ModalOutput: FC<ModalOutputProps> = (props) => {
  const { className } = props;
  const { items } = useAppSelector(state => state.form);
  return (
  <div className={[cls.ModalOutput, className].join(' ')}>
    <ul className={cls.OuputList}>
        {items.map((output: FormItem) => {
          const label: string = `${Object.keys(output)}`;
            return (
              <li className={cls.OuputItem} key={label}>
                  <p className={cls.OutputLabel}>{label}:</p>
                  <div className={cls.OutputValuesBlock}>
                  <ul className={cls.OutputValuesList}>
                      {output[label].map(value => (
                        <li className={cls.OutputValue}>{value}</li>
                        ))}
                  </ul>
                  </div>
              </li>
              )})}
    </ul>
  </div>);
};

export default ModalOutput;
