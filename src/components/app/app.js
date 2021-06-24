import appStyles from './app.module.css';
import AppHeader from '../app-header/app-header';
import Main from '../main/main';
import { getIngredients } from '../../utils/api-requests';
import React from 'react';
import { BurgerContext } from '../../utils/burger-context'

function App() {
  const [ingredients, setIngredients] = React.useState([]);

  React.useEffect(() => {
    getIngredients()
      .then(ingredients => setIngredients(ingredients.data))
      .catch(err => alert(`Ошибка обращения к серверу: ${err}`))
  }, [])

  return (
    <div className={appStyles.page}>
      <AppHeader />
      <BurgerContext.Provider value={ingredients}>
        {ingredients.length && <Main />}
      </BurgerContext.Provider>
    </div>
  );
}

export default App;
