import React from 'react';
import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../utils/prop-types';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './constructor-list.module.css';

function ConstructorList({bun, ingredients}) {
  return (
    <div className={`${styles.content} mt-5`}>
      {bun &&
        <div className='ml-10 pl-2 mr-4'>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={bun.name + ' (верх)'}
            price={bun.price}
            thumbnail={bun.image_mobile}
          />
        </div>
      }
      <div className={styles['main-block']}>
        {ingredients.map(item => (
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
      {bun &&
        <div className='ml-10 pl-2 mr-4'>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={bun.name + ' (низ)'}
            price={bun.price}
            thumbnail={bun.image_mobile}
          />
        </div>
      }
    </div>
  )
}

ConstructorList.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired,
  bun: ingredientPropTypes.isRequired
}

export default ConstructorList;
