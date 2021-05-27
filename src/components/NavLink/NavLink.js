import React from 'react';
import linkStyle from './NavLink.module.css';


function NavLink({iconComponent, linkName, status}) {

  const linkNameClass =  status === 'active' ? "text text_type_main-default ml-2 mr-5" : `text text_type_main-default ml-2 mr-5 ${linkStyle['link-inactive']}`

  return (
    <a className={`${linkStyle['link-box']} pl-5 mr-2`} href="#">
      {status === 'active' ? iconComponent('primary') : iconComponent('secondary')}
      <span className={linkNameClass}>{linkName}</span>
    </a>
  )
}

export default NavLink;
