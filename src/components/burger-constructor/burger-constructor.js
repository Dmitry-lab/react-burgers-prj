import React from 'react';
import ConstructorList from '../constructor-list/constructor-list';
import PropTypes from 'prop-types';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import constructorStyles from './burger-constructor.module.css'

const constructorPropTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  image_mobile: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
  __v: PropTypes.number.isRequired,
})

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

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(constructorPropTypes.isRequired).isRequired
}

export default BurgerConstructor;
