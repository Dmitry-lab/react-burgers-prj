import React from 'react';
import styles from './orders-list.module.css';
import OrderItem from '../order-item/order-item';
import { useSelector } from 'react-redux';

function OrdersList() {
  const { orders } = useSelector(store => store.ordersInfo)

  return (
    <div className={styles.list}>
      {orders.length > 0
        ? orders.map(order => (
          <OrderItem order={order} key={order._id}/>
        ))
        : <p className='text text_type_main-medium'>Загрузка информации о заказах...</p>
      }
    </div>
  )
}

export default OrdersList
