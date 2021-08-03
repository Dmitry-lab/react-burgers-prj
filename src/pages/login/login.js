import React, { useState } from 'react';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink, Redirect } from 'react-router-dom';
import styles from './login.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { userLogIn } from '../../services/actions/user-info';

function Login() {
  const [emailValue, setEmail] = useState('');
  const [passwordValue, setPassword] = useState('');

  const dispatch = useDispatch();
  const user = useSelector(store => store.userInfo.info);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userLogIn(emailValue, passwordValue));
  }

  if (user.email)
    return <Redirect to='/' />

  return (
    <form className={styles.content} onSubmit={submitHandler}>
      <h1 className='text text_type_main-medium mb-6'>Вход</h1>
      <Input
        type='email'
        placeholder='E-mail'
        onChange={e => setEmail(e.target.value)}
        value={emailValue}
        name='email'
      />
      <PasswordInput
        onChange={e => setPassword(e.target.value)}
        value={passwordValue}
        name='password'
      />
      <Button type='primary' size='medium'>Войти</Button>
      <p className='text text_type_main-default text_color_inactive mt-20'>
        Вы новый пользователь? <NavLink className={styles.link} to='/register'>Зарегистрироваться</NavLink>
      </p>
      <p className='text text_type_main-default text_color_inactive mt-4'>
        Забыли пароль? <NavLink className={styles.link} to='/forgot-password'>Восстановить пароль</NavLink>
      </p>
    </form>
  )
}


export default Login;
