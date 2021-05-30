import appStyles from './app.module.css';
import AppHeader from '../app-header/app-header';
import Main from '../main/main';
import  { ingridientsList, addedIngridients } from '../../utils/data';

function App() {
  return (
    <div className={appStyles.page}>
      <AppHeader />
      <Main ingridients={ingridientsList} addedIngridients={addedIngridients}/>
    </div>
  );
}

export default App;
