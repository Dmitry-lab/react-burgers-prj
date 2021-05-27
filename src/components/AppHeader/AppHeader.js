import React from 'react';
import NavBlock from '../NavBlock/NavBlock';
import NavLink from '../NavLink/NavLink';
import headerStyles from './AppHeader.module.css';
import { Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

function AppHeader() {
    return (
        <header className={headerStyles.header}>
          <div className={headerStyles.content}>
            <NavBlock />
            <NavLink iconComponent={(type) => <ProfileIcon type={type}/>} linkName='Личный кабинет' status='inactive' />
            <div className={headerStyles['logo-container']}>
              <Logo />
            </div>
          </div>
        </header>
    )
}

export default AppHeader;
