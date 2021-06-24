import React, { useContext } from 'react';
import ConstructorList from '../constructor-list/constructor-list';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import constructorStyles from './burger-constructor.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { CLEAR_ORDER_INFO } from '../../services/actions/burgers-constructor';

function BurgerConstructor() {
  const initialSum = { sum: 0 }

  const { ingredients: allIngredients } = useSelector(store => store.burgersConstructor);
  const dispatch = useDispatch();
  const [sumState, dispatchSumState] = React.useReducer(reducer, initialSum, undefined)
  const [isModalOpened, setModalOpened] = React.useState(false);

  function reducer(state, action) {
    const sum = action.payload.reduce((prev, item) => {
      return item.type === 'bun' ? prev + 2 * item.price : prev + item.price;
    }, 0)
    return { sum }
  }

  const handlerCloseModal = () => {
    setModalOpened(state => {
      state = false;
      dispatch({ type: CLEAR_ORDER_INFO })
    });
  }

  const handlerOpenModal = () => {
    setModalOpened(true);
  }

  const selectedIngredients = React.useMemo(() => {
    const bun = allIngredients.find(item => item.type === 'bun')
    const main = allIngredients.filter(item => item.type !== 'bun')

    return [bun, ...main]
  }, [allIngredients])

  const findBun = React.useMemo(() => {
    return selectedIngredients.find(item => item.type === 'bun')
  }, [selectedIngredients])

  const findMain = React.useMemo(() => {
    return selectedIngredients.filter(item => item.type !== 'bun')
  }, [selectedIngredients])


  React.useEffect(() => {
    selectedIngredients.length && dispatchSumState({ payload: selectedIngredients })
  }, [selectedIngredients])

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
            <OrderDetails ingredients={selectedIngredients}/>
          </Modal>
        }
      </div>
    </div>
  )
}

export default BurgerConstructor;

