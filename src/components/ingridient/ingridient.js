import React from 'react';
import Modal from '../modal/modal';
import IngridientDetails from '../ingridient-details/ingridient-details';
import { ingridientPropTypes } from '../../utils/prop-types';
import ingridientsStyles from './ingridients.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

function Ingridient({info}) {
  const [modalIsOpened, setModalOpened] = React.useState(false);

  const handlerCloseModal = () => {
    setModalOpened(false);
  }

  const handlerOpenModal = () => {
    setModalOpened(true);
  }

  return (
    <div className={ingridientsStyles.content} onClick={handlerOpenModal}>
      <img className='mb-1' src={info.image} alt={`ингридиент ${info.name}`} />
      <span className='text text_type_digits-default mb-1'>{info.price} <CurrencyIcon type="primary" /> </span>
      <span className={`${ingridientsStyles.caption} text text_type_main-default`}>{info.name}</span>
      <Counter count={1} size={'default'}/>
      {modalIsOpened &&
        <Modal onCloseClick={handlerCloseModal} header='Детали ингридиента'>
          <IngridientDetails info={info}/>
        </Modal>
      }
    </div>
  )
}

Ingridient.propTypes = {
  info: ingridientPropTypes.isRequired
}

export default Ingridient;
