import React from 'react';
import Tabs from '../tabs/tabs';
import IngredientsList from '../ingredients-list/ingredients-list';
import ingredientsStyles from './burger-ingredients.module.css';
import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../utils/prop-types'

function BurgerIngredients(props) {

  return (
    <div className={`${ingredientsStyles.content} mr-10`}>
      <Tabs />
      <IngredientsList {...props}/>
    </div>
  )
}

export default BurgerIngredients;

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired
}


