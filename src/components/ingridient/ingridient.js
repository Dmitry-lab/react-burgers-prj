import React from 'react';
import ingridientsStyles from './ingridients.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function Ingridient({info}) {
  return (
    <div className={ingridientsStyles.content}>
      <img className='mb-1' src={info.image} alt='изображение ингридиента' />
      <span className='text text_type_digits-default mb-1'>{info.price} <CurrencyIcon type="primary" /> </span>
      <span className={`${ingridientsStyles.caption} text text_type_main-default`}>{info.name}</span>
    </div>
  )
}

export default Ingridient;
