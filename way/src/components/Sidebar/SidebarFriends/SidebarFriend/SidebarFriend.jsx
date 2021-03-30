import React from 'react';
import { NavLink } from 'react-router-dom';


const SidebarFriend = (props) => {
    let linkUrl = '/' + props.id;
    return (
        <NavLink className='sidebar__friends__container__link' to={linkUrl}>
            <img className='sidebar__friends__container__link__photo' src={props.src} alt="" />
            <p className='sidebar__friends__container__link__name'>{props.name}</p>
        </NavLink>

    )
}

export default SidebarFriend;