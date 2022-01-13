import React from "react";
import ReactDOM from 'react-dom'

const ModalS = {
  position: 'fixed',
  zIndex: 1000,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'blue',
}

const someOverlayS ={
  position: 'fixed',
  // zIndex: 5,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)'
}

export const Modal = ({ isOpen, children, onClose }) => {
  if(!isOpen) return null;

  return ReactDOM.createPortal(
    <>
    <div style={someOverlayS}/>
      <div style={ModalS}>
        <button onClick={onClose}>Close Modal</button>
        {children}
      </div>
    </>,
    document.getElementById('portal')
  )
}