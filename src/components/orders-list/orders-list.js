import React from 'react';
import styles from './orders-list.module.css';
import { testOrders } from '../../utils/test-data';
import OrderItem from '../order-item/order-item';

function OrdersList() {
  return (
    <div className={styles.list}>
      {testOrders.map(order => (
        <OrderItem info={order}/>
      ))}
    </div>
  )
}

export default OrdersList
