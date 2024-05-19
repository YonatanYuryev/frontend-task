import { FC } from "react";
import { IoIosArrowDown } from "react-icons/io";
import cls from "./Dropdown.module.scss";
import { DropdownItem } from "../../../../store/features/dropdown/types";

interface DropdownProps {
  className?: string;
  value: string;
  visible: boolean;
  items: DropdownItem[];
  onClickItem: (value: string) => void;
  onClickDropdown: () => void;
}

const Dropdown: FC<DropdownProps> = (props) => {
  const { className, items, value, visible, onClickDropdown, onClickItem } = props;
  return <div className={[cls.Dropdown, className].join(' ')}>
    <div className={cls.ValueWrapper} onClick={onClickDropdown}>
      <p className={cls.Label}>{value}
        </p>
      <IoIosArrowDown className={[cls.DropdownArrow, visible && cls.opened].join(' ')} />
    </div>
    {visible && <ul className={cls.DropdownList}>
      {items.length && items.map((item) => (
        <li key={item.value} className={cls.DropdownItem} onClick={() => onClickItem(item.label)}>{item.label}</li>
      ))}
    </ul>}
  </div>;
};

export default Dropdown;
