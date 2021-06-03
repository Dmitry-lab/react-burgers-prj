import appStyles from './app.module.css';
import AppHeader from '../app-header/app-header';
import Main from '../main/main';
import getIngridients from '../../utils/api-requests';
import React from 'react';

function App() {
  const [ingridients, setIngridients] = React.useState([]);

  React.useEffect(() => {
    getIngridients()
      .then(ingridients => {
        console.log('0')
        setIngridients(ingridients.data)
      })
      .catch(err => alert(`Ошибка обращения к серверу: ${err}`))
  }, [])

  return (
    <div className={appStyles.page}>
      <AppHeader />
      <Main ingridients={ingridients} addedIngridients={ingridients}/>
    </div>
  );
}

export default App;
