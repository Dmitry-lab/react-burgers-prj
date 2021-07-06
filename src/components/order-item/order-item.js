import React, {useMemo} from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './order-item.module.css';

function OrderItem({ info }) {

  const visibleIngredients = useMemo(() => {
    return info.ingredients.slice(0,6)
  }, [info.ingredients])

  return (
    <div className={styles.block}>
      <div className={styles.top}>
        <span className='text text_type_digits-default'># {info.number}</span>
        <span className='text text_type_main-default text_color_inactive'>{info.date}</span>
      </div>
      <span className='text text_type_main-medium mt-6 mb-6'>{info.name}</span>
      <div className={styles.bottom}>
        <div className={styles['image-boxes']}>
          {visibleIngredients.map(item => (
              <div
                className={styles['image-box']}
                style={{
                  backgroundImage: `url("${item}")`
                }}
              />
          ))}
        </div>
        <div className={styles.price}>
          <span className='text text_type_digits-default'>{info.price}</span>
          <CurrencyIcon type='primary' />
        </div>
      </div>
    </div>
  )
}

export default OrderItem;