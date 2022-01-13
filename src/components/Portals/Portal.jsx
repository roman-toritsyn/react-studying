import React, { useState } from 'react'
import { Modal } from './Modal';

const ModalContainerS = {
  marginTop: '25px',
  position: 'relative',
  zIndex: 1,
}

const OtherContentS = {
  height: '100px',
  backgroundColor: 'red',
  zIndex: 2
}

export const ModalContainer = () => {

  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  const clickHandler = () => setIsOpen(true);

  return (
    <>
      <div style={ModalContainerS}>
        <button onClick={clickHandler}>Open modal</button>

        <Modal isOpen={isOpen} onClose={onClose}>
          Sometext
        </Modal>
      </div>

      <div style={OtherContentS}>Other content</div>
    </>
  )
}
