import React from 'react';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { ingredientPropTypes } from '../../utils/prop-types';
import ingredientsStyles from './ingredients.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

function Ingredient({info}) {
  const [modalIsOpened, setModalOpened] = React.useState(false);

  const handlerCloseModal = () => {
    setModalOpened(false);
  }

  const handlerOpenModal = () => {
    setModalOpened(true);
  }

  return (
    <div className={ingredientsStyles.content} onClick={handlerOpenModal}>
      <img className='mb-1' src={info.image} alt={`ингридиент ${info.name}`} />
      <span className='text text_type_digits-default mb-1'>{info.price} <CurrencyIcon type="primary" /> </span>
      <span className={`${ingredientsStyles.caption} text text_type_main-default`}>{info.name}</span>
      <Counter count={1} size={'default'}/>
      {modalIsOpened &&
        <Modal onCloseClick={handlerCloseModal} header='Детали ингридиента'>
          <IngredientDetails info={info}/>
        </Modal>
      }
    </div>
  )
}

Ingredient.propTypes = {
  info: ingredientPropTypes.isRequired
}

export default Ingredient;
