import React from 'react';
import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../utils/prop-types';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './constructor-list.module.css';

function ConstructorList(props) {
  return (
    <div className={`${styles.content} mt-5`}>
      <div className='ml-10 pl-2 mr-4'>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail='https://code.s3.yandex.net/react/code/bun-02-mobile.png'
        />
      </div>
      <div className={styles['main-block']}>
        {props.data.map(item => (
          <div className={`${styles['main-element']} pl-4`} key={item._id}>
            <DragIcon />
            <ConstructorElement
              text={item.name}
              price={item.price}
              thumbnail={item.image_mobile}
            />
          </div>
        ))}
      </div>
      <div className='ml-10 pl-2 mr-4'>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail='https://code.s3.yandex.net/react/code/bun-02-mobile.png'
        />
      </div>
    </div>
  )
}

ConstructorList.propTypes = {
  data: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired
}

export default ConstructorList;
