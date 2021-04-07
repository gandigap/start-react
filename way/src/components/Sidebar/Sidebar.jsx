import React from 'react';
import SidebarContent from './SidebarContent/SidebarContent';
import SidebarFriends from './SidebarFriends/SidebarFriends';

const Sidebar = (props) => {
  let state = props.sidebarPage;

  let sidebarContainers = state.sidebarLinks.map((element) =>
    <SidebarContent src={element.iconSrc} text={element.text} key={element.text} />
  );

  return (
    <nav className='sidebar'>
      {sidebarContainers}
      <SidebarFriends friends={state.sidebarFriends} />
    </nav>
  )
}

export default Sidebar;