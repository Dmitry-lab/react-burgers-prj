import Main from '../../components/main/main';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllIngredients } from '../../services/actions/burgers-constructor';
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients';
import BurgerConstructor from '../../components/burger-constructor/burger-constructor';

function HomePage() {
  const { ingredients } = useSelector(store => store.burgersConstructor);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllIngredients())
  }, [])

  return (
    ingredients.length
      ? <Main name='Соберите бургер'>
          <BurgerIngredients />
          <BurgerConstructor />
        </Main>
      : null
  )
}

export default HomePage;
