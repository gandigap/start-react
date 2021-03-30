import React from 'react';
import SidebarFriend from './SidebarFriend/SidebarFriend';

const SidebarFriends = (props) => {
    let sidebarFriends = props.friends.map((element) =>
        <SidebarFriend src={element.photoFriend} name={element.name} id={element.id} />
    );

    return (
        <nav className='sidebar__friends'>
            <h3 className='sidebar__friends__title'>Friends</h3>
            <div className='sidebar__friends__container'>
                {sidebarFriends}
            </div>

        </nav>
    )
}

export default SidebarFriends;