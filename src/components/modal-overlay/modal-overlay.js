import React from 'react';
import overlayStyles from './modal-overlay.module.css'
import PropTypes from 'prop-types'

function ModalOverlay({ onCloseClick }) {

  const handlerCloseClick = (evt) => {
    evt.stopPropagation();
    onCloseClick()
  }

  return <div className={overlayStyles.overlay} onClick={handlerCloseClick}></div>
}

export default ModalOverlay;


ModalOverlay.ingredientPropTypes = {
  onCloseClick: PropTypes.func.isRequired
}
