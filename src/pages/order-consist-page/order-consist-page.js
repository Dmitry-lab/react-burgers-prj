import React, { useEffect } from 'react';
import OrderConsist from '../../components/order-consist/order-consist';
import { useDispatch, useSelector } from 'react-redux';
import { ORDERS_URL_ALL } from '../../utils/api-requests';
import { WS_CONNECTION_START, WS_CLOSE_CONNECTION } from '../../services/actions/ws-actions';
import styles from './order-consist-page.module.css';


function OrderConsistPage() {
  const dispatch = useDispatch();
  const { orders } = useSelector(store => store.ordersInfo)

  useEffect(() => {
    dispatch({type: WS_CONNECTION_START, wsUrl: ORDERS_URL_ALL})

    return () => dispatch({type: WS_CLOSE_CONNECTION })
  }, [])

  return (
    <div className={styles.content}>
      {orders.length
        ? <OrderConsist />
        : <p className='text text_type_main-medium'>Загрузка информации о заказе...</p>
      }
    </div>
  )
}

export default OrderConsistPage;
