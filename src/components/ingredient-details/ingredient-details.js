import React from 'react';
import styles from './ingredient-details.module.css'
import { ingredientPropTypes } from '../../utils/prop-types';

function IngredientDetails({info}) {
  const nutrientTextStyle = ' text text_type_main-default text_color_inactive';

  return (
    <div className={styles.ingredient}>
      <img className='mb-4' src={info.image_large} alt={`изображение ${info.name}`} />
      <p className='text text_type_main-medium'>{info.name}</p>
      <div className={`${styles.nutrients} mt-8 mb-15`}>
        <div className={styles.nutrient + nutrientTextStyle}>
          <span>Калории,ккал</span>
          <span className='text_type_digits-default'>{info.calories}</span>
        </div>
        <div className={styles.nutrient + nutrientTextStyle}>
          <span>Белки, г</span>
          <span className='text_type_digits-default'>{info.proteins}</span>
        </div>
        <div className={styles.nutrient + nutrientTextStyle}>
          <span>Жиры, г</span>
          <span className='text_type_digits-default'>{info.fat}</span>
        </div>
        <div className={styles.nutrient + nutrientTextStyle}>
          <span>Углеводы, г</span>
          <span className='text_type_digits-default'>{info.carbohydrates}</span>
        </div>
      </div>
    </div>
  )
}

export default IngredientDetails

IngredientDetails.propTypes = {
  info: ingredientPropTypes.isRequired
}
