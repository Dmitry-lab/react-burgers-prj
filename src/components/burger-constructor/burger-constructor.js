import React from 'react';
import ConstructorList from '../constructor-list/constructor-list';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import constructorStyles from './burger-constructor.module.css'

function BurgerConstructor(props) {
  return (
    <div className={constructorStyles.content}>
      <ConstructorList {...props}/>
      <div className={`${constructorStyles['bottom-block']} mt-10 mr-4`}>
        <div className={`${constructorStyles['sum-block']} mr-10`}>
          <span className='text text_type_digits-medium'>610</span>
          <CurrencyIcon />
        </div>
        <Button type="primary" size="large">Оформить заказ</Button>
      </div>
    </div>
  )
}

export default BurgerConstructor;
