import React, { useState } from 'react';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink } from 'react-router-dom';
import styles from '../login/login.module.css';

function Registration() {
  const [emailValue, setEmail] = useState('');
  const [nameValue, setName] = useState('');
  const [passwordValue, setPassword] = useState('');

  return (
    <div className={styles.content}>
      <h1 className='text text_type_main-medium mb-6'>Регистрация</h1>
      <Input
        type='text'
        placeholder='Имя'
        onChange={e => setName(e.target.value)}
        value={nameValue}
        name='user-name'
      />
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
      <Button type='primary' size='medium'>Зарегистрироваться</Button>
      <p className='text text_type_main-default text_color_inactive mt-20'>
        Уже зарегистрированы? <NavLink className={styles.link} to='/login'>Войти</NavLink>
      </p>
    </div>
  )
}


export default Registration;
