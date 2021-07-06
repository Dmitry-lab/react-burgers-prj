import React, { useMemo } from 'react';
import styles from './statistics.module.css';
import { testOrders } from '../../utils/test-data';
import OrdersNumberList from '../orders-number-list/orders-number-list';

function Statistics() {

  const doneOrders = useMemo(() => {
    return testOrders.filter(order => order.status === 'done')
  }, [testOrders])

  const ordersInWork = useMemo(() => {
    return testOrders.filter(order => order.status === 'active')
  }, [testOrders])

  const textClassName = 'text text_type_main-medium mt-15';
  const numberClassName = `${styles.glow} text text_type_digits-large`;

  return (
    <div className={styles.content}>
      <div className={styles.orders}>
        <OrdersNumberList list={doneOrders} name='Готовы'/>
        <OrdersNumberList list={ordersInWork} name='В работе'/>
      </div>
      <p className={textClassName}>Выполнено за всё время:</p>
      <span className={numberClassName}>28 753</span>
      <p className={textClassName}>Выполнено за сегодня:</p>
      <span className={numberClassName}>138</span>
    </div>
  )
}

export default Statistics;
