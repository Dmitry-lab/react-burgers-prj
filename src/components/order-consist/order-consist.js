import React from 'react';
import styles from './order-consist.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientsStyles from './ingredients.module.css';
import { orderPropTypes } from '../../utils/prop-types';


function  OrderConsist({ info }) {
  return (
    <div>
      <span className='text text_type_digits-default mb-10'>{info.number}</span>
      <h1 className='text text_type_main-medium mb-3'>{info.name}</h1>
      <span className='text text_type_main-medium mb-15'>
        {info.status === 'done' ? 'Выполнен' : 'В работе'}
      </span>
      <span className='text text_type_main-medium mb-6'>Состав:</span>
      <ul>
        {info.ingredients.map((item, index) => (
          <li key={index}>
            <div>
              <div
                className={styles['image-box']}
                style={{
                  backgroundImage: `url("${item.url}")`
                }}
              />
              <span className='text text_type_main-default'></span>
            </div>
            <div>
              <span className='text text_type_digits-default'>
                {`${item.qty} x ${item.price}`} <CurrencyIcon type='primary'/>
              </span>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <span>{info.date}</span>
        <div>
          <span>{info.price}</span>
          <CurrencyIcon type='primary'/>
        </div>
      </div>
    </div>
  )
}

OrderConsist.propTypes = {
  info: orderPropTypes
}

export default OrderConsist;
