import { FC, PropsWithChildren, useRef } from "react";
import cls from "./Modal.module.scss";
import { Button } from "../../button";

interface ModalProps {
  className?: string;
  onCloseModal: () => void;
}

const Modal: FC<ModalProps & PropsWithChildren> = (props) => {
  const { className, children, onCloseModal } = props;
  return (
    <div className={[cls.Modal, className].join(' ')}>
      <div className={cls.ModalInner} >
        <Button onClick={onCloseModal} className={cls.CloseButton}>X</Button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
