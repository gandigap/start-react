import React from 'react';
import SidebarContainer from './SidebarContainer/SidebarContainer';
import SidebarFriends from './SidebarFriends/SidebarFriends';

const Sidebar = (props) => {
  let sidebarContainers = props.links.map((element) =>
    <SidebarContainer src={element.iconSrc} text={element.text} />
  );
  return (
    <nav className='sidebar'>
      {sidebarContainers}
      <SidebarFriends friends={props.friends} />
    </nav>
  )
}

export default Sidebar;