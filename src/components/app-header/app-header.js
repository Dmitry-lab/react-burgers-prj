import React from 'react';
import NavBlock from '../nav-block/nav-block';
import headerStyles from './app-header.module.css';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'

function AppHeader() {
    return (
        <header className={headerStyles.header}>
          <div className={headerStyles.content}>
            <NavBlock />
            {/*<NavLink iconComponent={(type) => <ProfileIcon type={type}/>} linkName='Личный кабинет' status='inactive' /> */}
            <div className={headerStyles['logo-container']}>
              <Logo />
            </div>
          </div>
        </header>
    )
}

export default AppHeader;
