import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className='sidebar'>
      <div className='sidebar__container'>
        <NavLink className='sidebar__container__link' to='/profile'>Profile</NavLink>
      </div>
      <div className='sidebar__container'>
        <NavLink className='sidebar__container__link' to='/dialogs'>Messages</NavLink>
      </div>
      <div className='sidebar__container'>
        <NavLink className='sidebar__container__link' to='/news'>News</NavLink>
      </div>
      <div className='sidebar__container'>
        <NavLink className='sidebar__container__link' to='/music'>Music</NavLink>
      </div>
      <div className='sidebar__container'>
        <NavLink className='sidebar__container__link' to='/setting'>Setting</NavLink>
      </div>
    </nav>
  )
}

export default Sidebar;