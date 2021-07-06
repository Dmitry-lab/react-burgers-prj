import React, { useState } from 'react';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink } from 'react-router-dom';
import styles from '../login/login.module.css';

function ResetPassword() {
  const [passwordValue, setPassword] = useState('');
  const [codeValue, setEmail] = useState('');

  return (
    <div className={styles.content}>
      <h1 className='text text_type_main-medium mb-6'>Восстановление пароля</h1>
      <PasswordInput
        onChange={e => setPassword(e.target.value)}
        value={passwordValue}
        name='password'
      />
      <Input
        type='text'
        placeholder='Введите код из письма'
        onChange={e => setEmail(e.target.value)}
        value={codeValue}
        name='email'
      />
      <Button type='primary' size='medium'>Сохранить</Button>
      <p className='text text_type_main-default text_color_inactive mt-20'>
        Вспомнили пароль? <NavLink className={styles.link} to='/login'>Войти</NavLink>
      </p>
    </div>
  )
}


export default ResetPassword;
