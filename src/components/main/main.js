import React from 'react';
import mainStyles from './main.module.css';
import BurgerIngridients from '../burger-ingridients/burger-ingridients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

function Main(props) {
  return (
    <main className={mainStyles.main}>
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <div className={mainStyles.content}>
        <BurgerIngridients data = {props.ingridients} />
        <BurgerConstructor data = {props.addedIngridients} />
      </div>
    </main>
  )
}

export default Main;
