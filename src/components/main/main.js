import React from 'react';
import mainStyles from './main.module.css';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../utils/prop-types';

function Main(props) {
  return (
    <main className={mainStyles.main}>
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <div className={mainStyles.content}>
        <BurgerIngredients data = {props.ingredients} />
        <BurgerConstructor data = {props.addedIngredients} />
      </div>
    </main>
  )
}

export default Main;

Main.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired,
  addedIngredients: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired
}
