import React from 'react';
import ConstructorList from '../constructor-list/constructor-list';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import constructorStyles from './burger-constructor.module.css'
import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../utils/prop-types'

function BurgerConstructor(props) {
  const [isModalOpened, setModalOpened] = React.useState(false);

  const handlerCloseModal = () => {
    setModalOpened(false);
  }

  const handlerOpenModal = () => {
    setModalOpened(true);
  }

  return (
    <div className={constructorStyles.content}>
      <ConstructorList {...props}/>
      <div className={`${constructorStyles['bottom-block']} mt-10 mr-4`}>
        <div className={`${constructorStyles['sum-block']} mr-10`}>
          <span className='text text_type_digits-medium'>610</span>
          <CurrencyIcon />
        </div>
        <Button type="primary" size="large" onClick={handlerOpenModal}>Оформить заказ</Button>
        {isModalOpened &&
          <Modal onCloseClick={handlerCloseModal}>
            <OrderDetails orderNumber='034536'/>
          </Modal>
        }
      </div>
    </div>
  )
}

export default BurgerConstructor;

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired
}
