import React, { useContext } from 'react';
import ConstructorList from '../constructor-list/constructor-list';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import constructorStyles from './burger-constructor.module.css'
import { ConstructorContext } from '../../utils/constructor-context'

function BurgerConstructor() {
  const initialSum = { sum: 0 }

  const ingredients = useContext(ConstructorContext);
  const [sumState, dispatchSumState] = React.useReducer(reducer, initialSum, undefined)
  const [isModalOpened, setModalOpened] = React.useState(false);

  function reducer(state, action) {
    const sum = action.payload.reduce((prev, item) => {
      return item.type === 'bun' ? prev + 2 * item.price : prev + item.price;
    }, 0)
    return { sum }
  }

  const handlerCloseModal = () => {
    setModalOpened(false);
  }

  const handlerOpenModal = () => {
    setModalOpened(true);
  }

  const findBun = React.useMemo(() => {
    return ingredients.find(item => item.type === 'bun')
  }, [ingredients])

  const findMain = React.useMemo(() => {
    return ingredients.filter(item => item.type !== 'bun')
  }, [ingredients])

  React.useEffect(() => {
    ingredients.length && dispatchSumState({ payload: ingredients })
  }, [ingredients])


  return (
    <div className={constructorStyles.content}>
      <ConstructorList bun={findBun} ingredients={findMain}/>
      <div className={`${constructorStyles['bottom-block']} mt-10 mr-4`}>
        <div className={`${constructorStyles['sum-block']} mr-10`}>
          <span className='text text_type_digits-medium'>{sumState.sum}</span>
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

