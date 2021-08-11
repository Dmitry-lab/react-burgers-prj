import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './user-info.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setUserInfo, userLogOut } from '../../services/actions/user-info';
import { getUserInfo, updateUser } from '../../utils/api-requests';

function UserInfo() {
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const [nameChanged, setNameChanged] = useState(false);
  const [loginChanged, setLoginChanged] = useState(false);
  const [passwordChanged, setPasswordChanged] = useState(false);

  const dispatch = useDispatch();
  const { info, requestError } = useSelector(store => store.userInfo);

  const mediumTextClassName = 'text text_type_main-medium text_color_inactive';
  const defaultTextClassName = 'text text_type_main-default text_color_inactive';

  useEffect(() => {
    dispatch(setUserInfo(getUserInfo))
  }, [])

  useEffect(() => {
    setName(info.name);
    setLogin(info.email);
    setPassword('');
    setNameChanged(false);
    setPasswordChanged(false);
    setLoginChanged(false)
  }, [info])

  const nameChangeHandler = (e) => {
    setName(e.target.value);
    (e.target.value !== info.name) ? setNameChanged(true) : setNameChanged(false);
  }

  const nameResetHandler = () => {
    setName(info.name);
    setNameChanged(false)
  }

  const loginResetHandler = () => {
    setLogin(info.email);
    setLoginChanged(false)
  }

  const passwordResetHandler = () => {
    setPassword('');
    setPasswordChanged(false)
  }

  const loginChangeHandler = (e) => {
    setLogin(e.target.value);
    (e.target.value !== info.email) ? setLoginChanged(true) : setLoginChanged(false);
  }

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
    (e.target.value !== '') ? setPasswordChanged(true) : setPasswordChanged(false);
  }

  const resetButtonHandler = () => {
    nameResetHandler();
    loginResetHandler();
    passwordResetHandler();
  }


  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setUserInfo(updateUser, name, login, password))
  }

  const checkSomeChanges = () => {
    return nameChanged || loginChanged || passwordChanged
  }

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(userLogOut());
  }


  return (
    <section className={styles.content}>
      <div className={styles.links}>
        <NavLink exact to='/profile' className={styles.link} activeClassName={styles.active}>
          <span className={mediumTextClassName}>Профиль</span>
        </NavLink>
        <NavLink to='/profile/orders' className={styles.link} activeClassName={styles.active}>
          <span className={mediumTextClassName}>История заказов</span>
        </NavLink>
        <NavLink to='/login' className={styles.link} activeClassName={styles.active} onClick={logoutHandler}>
          <span className={mediumTextClassName}>Выход</span>
        </NavLink>
        <p className={`${defaultTextClassName} mt-20 ${styles.info}`}>В этом разделе вы можете изменить свои персональные данные</p>
      </div>
      <form>
        <Input
          type='text'
          value={name}
          onChange={nameChangeHandler}
          onIconClick={nameResetHandler}
          placeholder='Имя'
          icon={nameChanged ? 'CloseIcon' : 'EditIcon'}
          size='default'
        />
        <Input
          type='email'
          value={login}
          onChange={loginChangeHandler}
          onIconClick={loginResetHandler}
          placeholder='Логин'
          icon={loginChanged ? 'CloseIcon' : 'EditIcon'}
          size='default'
        />
        <Input
          type='password'
          value={password}
          onChange={passwordChangeHandler}
          onIconClick={passwordResetHandler}
          placeholder='Пароль'
          icon={passwordChanged ? 'CloseIcon' : 'EditIcon'}
          size='default'
        />
        {checkSomeChanges()
          ? <div className={styles.buttons}>
              <Button type="secondary" size="medium" onClick={resetButtonHandler}>Отмена</Button>
              <Button type="primary" size="medium" onClick={submitHandler}>Сохранить</Button>
            </div>
          : null
        }
        {requestError
          ? <p className={`${styles.error} text text_type_main-default`}>
              {requestError}
            </p>
          : null
        }
      </form>

    </section>
  )
}

export default UserInfo;
