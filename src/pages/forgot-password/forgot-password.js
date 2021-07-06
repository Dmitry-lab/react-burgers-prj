import React, { useState } from 'react';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink } from 'react-router-dom';
import styles from '../login/login.module.css';

function ForgotPassword() {
  const [emailValue, setEmail] = useState('');

  return (
    <div className={styles.content}>
      <h1 className='text text_type_main-medium mb-6'>Восстановление пароля</h1>
      <Input
        type='email'
        placeholder='Укажите e-mail'
        onChange={e => setEmail(e.target.value)}
        value={emailValue}
        name='email'
      />
      <Button type='primary' size='medium'>Восстановить</Button>
      <p className='text text_type_main-default text_color_inactive mt-20'>
        Вспомнили пароль? <NavLink className={styles.link} to='/login'>Войти</NavLink>
      </p>
    </div>
  )
}


export default ForgotPassword;
