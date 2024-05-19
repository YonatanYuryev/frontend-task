import React, { useState } from 'react';
import cls from './App.module.scss'
import { Form } from './components';
import { Button } from './shared/ui/button';
import { Modal } from './shared/ui/modal';
import { useAppDispatch, useAppSelector } from './hooks/storeHooks';
import { onClose, onOpen } from './store/features/modal/modalSlice';

function App() {
  const { isOpen } = useAppSelector(state => state.modal);
  const dispatch = useAppDispatch();

  return (
    <div className={cls.App}>
      <Form />
      <Button className={cls.SaveButton} onClick={() => dispatch(onOpen(true))}>Save</Button>
      {isOpen && <Modal onCloseModal={() => dispatch(onClose(false))}>
        
      </Modal>}
    </div>
  );
}

export default App;
