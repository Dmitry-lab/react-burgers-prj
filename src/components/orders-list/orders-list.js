import React from 'react';
import styles from './orders-list.module.css';
import OrderItem from '../order-item/order-item';
import { useSelector } from 'react-redux';

function OrdersList() {
  const { orders } = useSelector(store => store.ordersInfo);
  const { ingredients } = useSelector((store) => store.burgersConstructor);

  return (
    <div className={styles.list}>
      {orders.length && ingredients.length
        ? orders.map(order => (
            order.ingredients ? <OrderItem order={order} key={order._id}/> : null
        ))
        : <p className='text text_type_main-medium'>Загрузка информации о заказах...</p>
      }
    </div>
  )
}

export default OrdersList
