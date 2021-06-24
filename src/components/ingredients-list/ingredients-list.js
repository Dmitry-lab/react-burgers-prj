import React from 'react';
import Ingredient from '../ingredient/ingredient';
import listSyles from './ingredients-list.module.css';
import { useSelector } from 'react-redux';

function IngredientsList() {
  const { ingredients } = useSelector((store) => store.burgersConstructor)

  const specificList = (ingredients, type) => {
    return ingredients.filter(item => item.type === type)
  }

  return (
    <div className={listSyles.types}>
      <section className='mb-10'>
        <h2 className='text text_type_main-medium mb-6'>Булки</h2>
        <div className={`${listSyles.list}`}>
          {specificList(ingredients, 'bun').map(item => (
            <Ingredient info={item} key={item._id}/>
          ))}
        </div>
      </section>
      <section className="mb-10">
        <h2 className='text text_type_main-medium mb-6'>Соусы</h2>
        <div className={`${listSyles.list}`}>
          {specificList(ingredients, 'sauce').map(item => (
            <Ingredient info={item} key={item._id}/>
          ))}
        </div>
      </section>
      <section>
        <h2 className='text text_type_main-medium mb-6'>Основные ингридиенты</h2>
        <div className={`${listSyles.list}`}>
          {specificList(ingredients, 'main').map(item => (
            <Ingredient info={item} key={item._id}/>
          ))}
        </div>
        </section>
    </div>
  )
}

export default IngredientsList;
