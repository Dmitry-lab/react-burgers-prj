import appStyles from './app.module.css';
import AppHeader from '../app-header/app-header';
import Main from '../main/main';
import ingridientsList from '../../utils/data';

function App() {
  return (
    <div className={appStyles.page}>
      <AppHeader />
      <Main data={ingridientsList}/>
    </div>
  );
}

export default App;
