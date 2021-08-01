import appStyles from './app.module.css';
import AppHeader from '../app-header/app-header';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/home-page/home-page';
import Login from '../../pages/login/login';
import Registration from '../../pages/registration/registration';
import ForgotPassword from '../../pages/forgot-password/forgot-password';
import ResetPassword from '../../pages/reset-password/reset-password';
import FeedPage from '../../pages/feed-page/feed-page';
import NotFound from '../../pages/not-found/not-found';
import UserInfo from '../../pages/user-info/user-info';
import IngredientDetailsPage from '../../pages/ingredient-details-page/ingredient-details-page';
import { getAllIngredients } from '../../services/actions/burgers-constructor';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllIngredients())
  }, [])

  return (
    <div className={appStyles.page}>
      <AppHeader />
      <Switch>
        <Route path='/' exact={true}>
          <HomePage />
        </Route>
        <Route path='/feed' exact={true}>
          <FeedPage />
        </Route>
        <Route path='/ingredients/:id'>
          <IngredientDetailsPage />
        </Route>
        <Route path='/profile' exact={true}>
          <UserInfo />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register'>
          <Registration />
        </Route>
        <Route path='/forgot-password'>
          <ForgotPassword />
        </Route>
        <Route path='/reset-password'>
          <ResetPassword />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
