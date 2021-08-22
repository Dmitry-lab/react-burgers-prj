import React, { useMemo } from 'react';
import styles from './order-consist.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function OrderConsist() {
  const { ingredients: ingredientsList } = useSelector((store) => store.burgersConstructor);
  const { orders } = useSelector(store => store.ordersInfo)
  const statusName = {
    created: 'Создан',
    pending: 'Готовится',
    done: 'Выполнен'
  }

  const { number: orderNumber } = useParams();

  const currentOrder = useMemo(() => {
    return orders.find(item => item.number === +orderNumber)
  }, [orders, orderNumber])

  const groupedIngredients = useMemo(() => {
    const countedIngredients = currentOrder.ingredients.reduce((acc, item) => {
      acc[item] = acc[item] ? acc[item] + 1 : 1;
      return acc
    }, {});
    ingredientsList.forEach(item => {
      if (countedIngredients[item._id])
        countedIngredients[item._id] = { ...item, count: countedIngredients[item._id] }
    })
    return countedIngredients
  }, [currentOrder.ingredients, ingredientsList])

  return (
    <div className={styles.order}>
      <span className='text text_type_digits-default mb-10'>#{currentOrder.number}</span>
      <h1 className={`text text_type_main-medium mb-3 ${styles['left-align']}`}>
        {currentOrder.name}
      </h1>
      <span className={`text text_type_main-default mb-15 ${styles['left-align']}`}>
        {statusName[currentOrder.status]}
      </span>
      <span className={`text text_type_main-medium mb-6 ${styles['left-align']}`}>
        Состав:
      </span>
      <ul className={styles.ingredients}>
        {Object.values(groupedIngredients).map((item, index) => (
          <li key={index}>
            <div>
              <div
                className={styles['image-box']}
                style={{
                  backgroundImage: `url("${item.image_mobile}")`
                }}
              />
              <span className='text text_type_main-default'>{item.name}</span>
            </div>
            <div>
              <span className='text text_type_digits-default'>
                {`${item.count} x ${item.price}`} <CurrencyIcon type='primary'/>
              </span>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <span>{currentOrder.updatedAt}</span>
        <div>
          <span>{currentOrder.price}</span>
          <CurrencyIcon type='primary'/>
        </div>
      </div>
    </div>
  )
}

export default OrderConsist;
