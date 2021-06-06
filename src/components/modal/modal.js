import React from 'react';
import ReactDOM from 'react-dom';
import ModalOverlay from '../modal-overlay/modal-overlay';
import modalStyles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types'

const MODAL_CONTAINER = document.querySelector('#modals');

function Modal({header=null, onCloseClick, children}) {

  React.useEffect(() => {
    document.addEventListener('keydown', handlerPressEsc)

    return () => document.removeEventListener('keydown', handlerPressEsc)
  }, [])

  const handlerPressEsc = (evt) => {
    if (evt.key === 'Escape')
      onCloseClick()
  }

  const handlerCloseClick = (evt) => {
    evt.stopPropagation();
    onCloseClick()
  }

  const content = (
    <>
      <div className={modalStyles.modal}>
        {header &&
          <h2 className={`${modalStyles.header} text text_type_main-large mt-10 mr-10 ml-10`}>
            {header}
          </h2>
        }
        <button type='button' className={modalStyles['close-button']} onClick={ handlerCloseClick}>
          <CloseIcon type='primary' />
        </button>
        {children}
      </div>
      <ModalOverlay onCloseClick={onCloseClick}/>
    </>
  )

  return ReactDOM.createPortal(content, MODAL_CONTAINER)
}

export default Modal;

Modal.propTypes = {
  header: PropTypes.string,
  onCloseClick: PropTypes.func.isRequired,
  children: PropTypes.element
}