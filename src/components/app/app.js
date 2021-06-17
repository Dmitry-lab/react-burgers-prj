import appStyles from './app.module.css';
import AppHeader from '../app-header/app-header';
import Main from '../main/main';
import { getIngredients } from '../../utils/api-requests';
import React from 'react';
import { ConstructorContext } from '../../utils/constructor-context'

function App() {
  const [ingredients, setIngredients] = React.useState([]);

  const ingredientsForConstructor = () => {
    const bun = ingredients.find(item => item.type === 'bun')
    const main = ingredients.filter(item => item.type !== 'bun')

    return [bun, ...main]
  }

  React.useEffect(() => {
    getIngredients()
      .then(ingredients => setIngredients(ingredients.data))
      .catch(err => alert(`Ошибка обращения к серверу: ${err}`))
  }, [])

  return (
    <div className={appStyles.page}>
      <AppHeader />
      <ConstructorContext.Provider value={ingredientsForConstructor()}>
        {ingredients.length && <Main ingredients={ingredients}/>}
      </ConstructorContext.Provider>
    </div>
  );
}

export default App;
