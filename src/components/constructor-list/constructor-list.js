import React from 'react';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import constructorListStyle from './constructor-list.module.css';

function ConstructorList(props) {
  return (
    <div className={`${constructorListStyle.content} mt-5`}>
      <div className='ml-10 pl-2 mr-4'>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail='https://code.s3.yandex.net/react/code/bun-02-mobile.png'
        />
      </div>
      <div className={constructorListStyle['main-block']}>
        {props.data.map(item => (
          <div className={`${constructorListStyle['main-element']} pl-4`} key={item._id}>
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

export default ConstructorList;
