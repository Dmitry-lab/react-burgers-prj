import appStyles from './app.module.css';
import AppHeader from '../app-header/app-header';
import Main from '../main/main';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllIngredients } from '../../services/actions/burgers-constructor';

function App() {
  const { ingredients } = useSelector(store => store.burgersConstructor);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllIngredients())
  }, [])

  return (
    <div className={appStyles.page}>
      <AppHeader />
      {ingredients.length && <Main />}
    </div>
  );
}

export default App;
