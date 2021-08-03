import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './user-info.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setUserInfo } from '../../services/actions/user-info';

function UserInfo() {
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const [nameChanged, setNameChanged] = useState(false);
  const [loginChanged, setLoginChanged] = useState(false);
  const [passwordChanged, setPasswordChanged] = useState(false);

  const dispatch = useDispatch();
  const info = useSelector(store => store.userInfo.info)

  const mediumTextClassName = 'text text_type_main-medium text_color_inactive';
  const defaultTextClassName = 'text text_type_main-default text_color_inactive';

  useEffect(() => {
    dispatch(setUserInfo())
  }, [])

  useEffect(() => {
    setName(info.name);
    setLogin(info.email)
  }, [info])

  const nameChangeHandler = (e) => {
    setName(e.target.value);
    setNameChanged(true);
  }

  const loginChangeHandler = (e) => {
    setLogin(e.target.value);
    setLoginChanged(true);
  }

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
    setPasswordChanged(true);
  }

  const checkSomeChanges = () => {
    return nameChanged || loginChanged || passwordChanged
  }

  return (
    <section className={styles.content}>
      <div className={styles.links}>
        <NavLink exact to='/profile' className={styles.link} activeClassName={styles.active}>
          <span className={mediumTextClassName}>Профиль</span>
        </NavLink>
        <NavLink to='/orders' className={styles.link} activeClassName={styles.active}>
          <span className={mediumTextClassName}>История заказов</span>
        </NavLink>
        <NavLink to='/login' className={styles.link} activeClassName={styles.active}>
          <span className={mediumTextClassName}>Выход</span>
        </NavLink>
        <p className={`${defaultTextClassName} mt-20 ${styles.info}`}>В этом разделе вы можете изменить свои персональные данные</p>
      </div>
      <div>
        <Input
          type='text'
          value={name}
          onChange={nameChangeHandler}
          placeholder='Имя'
          icon={nameChanged ? 'CloseIcon' : 'EditIcon'}
          size='default'
        />
        <Input
          type='email'
          value={login}
          onChange={loginChangeHandler}
          placeholder='Логин'
          icon={loginChanged ? 'CloseIcon' : 'EditIcon'}
          size='default'
        />
        <Input
          type='password'
          value={password}
          onChange={passwordChangeHandler}
          placeholder='Пароль'
          icon={passwordChanged ? 'CloseIcon' : 'EditIcon'}
          size='default'
        />
        {checkSomeChanges()
          ? <div className={styles.buttons}>
              <Button type="secondary" size="medium">Отмена</Button>
              <Button type="primary" size="medium">Сохранить</Button>
            </div>
          : null
        }
      </div>
    </section>
  )
}

export default UserInfo;
