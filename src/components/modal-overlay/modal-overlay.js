import React from 'react';
import overlayStyles from './modal-overlay.module.css'

function ModalOverlay({ onCloseClick }) {

  const handlerCloseClick = (evt) => {
    evt.stopPropagation();
    onCloseClick()
  }

  return <div className={overlayStyles.overlay} onClick={handlerCloseClick}></div>
}

export default ModalOverlay;
