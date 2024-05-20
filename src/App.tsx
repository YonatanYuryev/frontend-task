import React from 'react';
import cls from './App.module.scss'
import { Form } from './components';
import { Button } from './shared/ui/button';
import { Modal } from './shared/ui/modal';
import { useAppDispatch, useAppSelector } from './hooks/storeHooks';
import { setOpen } from './store/features/modal/modalSlice';

function App() {
  const { isOpen } = useAppSelector(state => state.modal);
  const dispatch = useAppDispatch();

  return (
    <div className={cls.App}>
      <Form />
      <Button className={cls.SaveButton} onClick={() => dispatch(setOpen(!isOpen))}>Save</Button>
      {isOpen && (
          <Modal onCloseModal={() => dispatch(setOpen(!isOpen))}>
              <div className={cls.Output}>
                
              </div>
          </Modal>
    )}
    </div>
  );
}

export default App;
