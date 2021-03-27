import React from 'react';

const Sidebar = () => {
  return (
    <nav className='sidebar'>
      <div className='sidebar__container'>
        <a className='sidebar__container__link' href="">Profile</a>
      </div>
      <div className='sidebar__container'>
        <a className='sidebar__container__link' href="">Messages</a>
      </div>
      <div className='sidebar__container'>
        <a className='sidebar__container__link' href="">News</a>
      </div>
      <div className='sidebar__container'>
        <a className='sidebar__container__link' href="">Music</a>
      </div>
      <div className='sidebar__container'>
        <a className='sidebar__container__link' href="">Setting</a>
      </div>
    </nav>
  )
}

export default Sidebar;