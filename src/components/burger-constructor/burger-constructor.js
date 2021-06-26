import React, { useMemo} from 'react';
import ConstructorList from '../constructor-list/constructor-list';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import constructorStyles from './burger-constructor.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { CLEAR_ORDER_INFO } from '../../services/actions/burgers-constructor';


function BurgerConstructor() {
  const [isModalOpened, setModalOpened] = React.useState(false);
  const { addedIngredients } = useSelector(store => store.burgersConstructor);
  const dispatch = useDispatch();

  const orderSum = useMemo(() => {
    return addedIngredients.reduce((prev, item) => {
      return item.type === 'bun' ? prev + 2 * item.price : prev + item.price;
    }, 0)
  }, [addedIngredients])


  const handlerCloseModal = () => {
    dispatch({ type: CLEAR_ORDER_INFO });
    setModalOpened(false)
  }

  const handlerOpenModal = () => {
    setModalOpened(true);
  }

  return (
    <div  className={constructorStyles.content}>
      <ConstructorList />
      <div className={`${constructorStyles['bottom-block']} mt-10 mr-4`}>
        <div className={`${constructorStyles['sum-block']} mr-10`}>
          <span className='text text_type_digits-medium'>{orderSum}</span>
          <CurrencyIcon />
        </div>
        <Button type="primary" size="large" onClick={handlerOpenModal}>Оформить заказ</Button>
        {isModalOpened &&
          <Modal onCloseClick={handlerCloseModal}>
            <OrderDetails ingredients={addedIngredients}/>
          </Modal>
        }
      </div>
    </div>
  )
}

export default BurgerConstructor;

