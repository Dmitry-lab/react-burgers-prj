import React, { useMemo } from 'react';
import { ingredientPropTypes } from '../../utils/prop-types';
import PropTypes from 'prop-types';
import ingredientsStyles from './ingredients.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';
import { useDrag } from 'react-dnd';

function Ingredient({info, onOpen}) {
  const { addedIngredients } = useSelector(store => store.burgersConstructor)
  const [, dragRef] = useDrag(() => ({
    type: 'ingredient',
    item: {info},
    collect: (monitor) => ({
      isDrag: monitor.isDragging()
    })
  }))

   const currentCount = useMemo(() => {
    return addedIngredients.filter(item => item._id === info._id).length
  }, [addedIngredients, info._id])

  return (
    <div ref={dragRef} className={ingredientsStyles.content} onClick={() => onOpen(info)}>
      <img className='mb-1' src={info.image} alt={`ингридиент ${info.name}`} />
      <span className='text text_type_digits-default mb-1'>{info.price} <CurrencyIcon type="primary" /> </span>
      <span className={`${ingredientsStyles.caption} text text_type_main-default`}>{info.name}</span>
      {currentCount ? <Counter count={currentCount} size={'default'}/> : null}
    </div>
  )
}

Ingredient.propTypes = {
  info: ingredientPropTypes.isRequired,
  onOpen: PropTypes.func
}

export default Ingredient;
