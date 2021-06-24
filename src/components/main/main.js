import React from 'react';
import mainStyles from './main.module.css';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

function Main() {
  return (
    <main className={mainStyles.main}>
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <div className={mainStyles.content}>
        <BurgerIngredients />
        <BurgerConstructor />
      </div>
    </main>
  )
}

export default Main;

