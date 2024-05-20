import React from 'react';
import cls from './App.module.scss'
import { Form } from './components/form/index';
import { Button } from './shared/ui/button';
import { Modal } from './shared/ui/modal';
import { useAppDispatch, useAppSelector } from './hooks/storeHooks';
import { setOpen } from './store/features/modal/modalSlice';
import { ModalOutput } from './components/modal-output';

function App() {
  const { isOpen } = useAppSelector(state => state.modal);
  const dispatch = useAppDispatch();

  const onClickOpen = () => dispatch(setOpen(!isOpen));
  const onClickClose = () => dispatch(setOpen(!isOpen));

  return (
    <div className={cls.App}>
      <Form />
      <Button className={cls.SaveButton} onClick={onClickOpen}>Save</Button>
      {isOpen && (
          <Modal onCloseModal={onClickClose}>
              <ModalOutput />
          </Modal>
    )}
    </div>
  );
}

export default App;
