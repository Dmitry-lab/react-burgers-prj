import React from 'react';
import Tabs from '../tabs/tabs';
import IngridientsList from '../ingridients-list/ingridients-list';
import ingridientsStyles from './burger-ingridients.module.css'

function BurgerIngridients(props) {

  return (
    <div className={`${ingridientsStyles.content} mr-10`}>
      <Tabs />
      <IngridientsList {...props}/>
    </div>
  )
}

export default BurgerIngridients;
