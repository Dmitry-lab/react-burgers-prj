import React from 'react';
import NavLink from '../nav-link/nav-link';
import navBlockStyles from './nav-block.module.css';
import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function NavBlock() {
    return (
        <nav className={navBlockStyles['nav-block']}>
          <div className={navBlockStyles['left-side']}>
            <NavLink iconComponent={(type) => <BurgerIcon type={type}/>} linkName='Конструктор' status='active' />
            <NavLink iconComponent={(type) => <ListIcon type={type}/>} linkName='Лента заказов' status='inactive'/>
          </div>
          <NavLink iconComponent={(type) => <ProfileIcon type={type}/>} linkName='Личный кабинет' status='inactive' />
        </nav>
    )
}

export default NavBlock;
