import React from 'react';
import styles from './orders-number-list.module.css';

function OrdersNumberList({ list, name}) {
  return (
    <div className={styles.content}>
      <span className='text text_type_main-medium mb-6'>{name}</span>
      <ul className={styles.numbers}>
        {list.map(order => (
          <li className='mb-2 text text_type_digits-default'>
            {order.number}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default OrdersNumberList;
