import React from 'react';
import Ingridient from '../ingridient/ingridient';
import listSyles from './ingridients-list.module.css';


function IngridientsList(props) {

  const specificList = (ingridients, type) => {
    return ingridients.filter(item => item.type === type)
  }

  console.log(props.data)

  return (
    <div className={listSyles.types}>
      <section className='mb-10'>
        <h2 className='text text_type_main-medium mb-6'>Булки</h2>
        <div className={`${listSyles.list}`}>
          {specificList(props.data, 'bun').map(item => (
            <Ingridient info={item} key={item.id}/>
          ))}
        </div>
      </section>
      <section className="mb-10">
        <h2 className='text text_type_main-medium mb-6'>Соусы</h2>
        <div className={`${listSyles.list}`}>
          {specificList(props.data, 'sauce').map(item => (
            <Ingridient info={item} key={item.id}/>
          ))}
        </div>
      </section>
      <section>
        <h2 className='text text_type_main-medium mb-6'>Основные ингридиенты</h2>
        <div className={`${listSyles.list}`}>
          {specificList(props.data, 'main').map(item => (
            <Ingridient info={item} key={item.id}/>
          ))}
        </div>
      </section>
    </div>
  )
}

export default IngridientsList;
