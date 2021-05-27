import appStyles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';

function App() {
  return (
    <div className={appStyles.page}>
      <AppHeader />
    </div>
  );
}

export default App;
