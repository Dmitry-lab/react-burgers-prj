import React from 'react';
import linkStyle from './nav-link.module.css';


function NavLink({iconComponent, linkName, status}) {

  const linkClassName = 'text text_type_main-default ml-2 mr-5';

  return (
    <a className={`${linkStyle['link-box']} pl-5 mr-2`} href="#">
      {status === 'active' ? iconComponent('primary') : iconComponent('secondary')}
      <span className={`${linkClassName}${status !== 'active' && ' text_color_inactive'}`}>
        {linkName}
      </span>
    </a>
  )
}

export default NavLink;
