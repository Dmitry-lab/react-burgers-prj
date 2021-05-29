import React from 'react';
import mainStyles from './main.module.css';
import BurgerIngridients from '../burger-ingridients/burger-ingridients';

function Main(props) {
  return (
    <main className={mainStyles.main}>
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <div className={mainStyles.content}>
        <BurgerIngridients {...props}/>
      </div>
    </main>
  )
}

export default Main;
