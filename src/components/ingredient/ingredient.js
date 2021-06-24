import React, { useMemo } from 'react';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { ingredientPropTypes } from '../../utils/prop-types';
import ingredientsStyles from './ingredients.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { SHOW_INGREDIENT_INFO, HIDE_INGREDIENT_INFO } from '../../services/actions/burgers-constructor';

function Ingredient({info}) {
  const { viewedIngredient } = useSelector(store => store.burgersConstructor)
  const dispatch = useDispatch();

  const handlerCloseModal = () => {
    dispatch({ type: HIDE_INGREDIENT_INFO })
  }

  const handlerOpenModal = () => {
    dispatch({ type: SHOW_INGREDIENT_INFO, info})
  }

  const isModalOpened = useMemo(() => {
    return info._id === viewedIngredient?._id ? true : false
  }, [info, viewedIngredient])

  return (
    <div className={ingredientsStyles.content} onClick={handlerOpenModal}>
      <img className='mb-1' src={info.image} alt={`ингридиент ${info.name}`} />
      <span className='text text_type_digits-default mb-1'>{info.price} <CurrencyIcon type="primary" /> </span>
      <span className={`${ingredientsStyles.caption} text text_type_main-default`}>{info.name}</span>
      <Counter count={1} size={'default'}/>
      {isModalOpened &&
        <Modal onCloseClick={handlerCloseModal} header='Детали ингридиента'>
          <IngredientDetails />
        </Modal>
      }
    </div>
  )
}

Ingredient.propTypes = {
  info: ingredientPropTypes.isRequired
}

export default Ingredient;
