import React from 'react';
import NavLink from '../NavLink/NavLink';
import navBlockStyles from './NavBlock.module.css';
import { BurgerIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function NavBlock() {
    return (
        <nav className={navBlockStyles['nav-block']}>
          <NavLink iconComponent={(type) => <BurgerIcon type={type}/>} linkName='Конструктор' status='active' />
          <NavLink iconComponent={(type) => <ListIcon type={type}/>} linkName='Лента заказов' status='inactive'/>
        </nav>
    )
}

export default NavBlock;
