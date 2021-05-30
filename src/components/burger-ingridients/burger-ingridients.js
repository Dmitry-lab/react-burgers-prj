import React from 'react';
import Tabs from '../tabs/tabs';
import PropTypes from 'prop-types';
import IngridientsList from '../ingridients-list/ingridients-list';
import ingridientsStyles from './burger-ingridients.module.css'

const ingridientPropTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  image_mobile: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
  __v: PropTypes.number.isRequired,
});

function BurgerIngridients(props) {

  return (
    <div className={`${ingridientsStyles.content} mr-10`}>
      <Tabs />
      <IngridientsList {...props}/>
    </div>
  )
}

BurgerIngridients.propTypes = {
  data: PropTypes.arrayOf(ingridientPropTypes.isRequired).isRequired
}



export default BurgerIngridients;
