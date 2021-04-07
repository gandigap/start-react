import React from 'react';
import { NavLink } from 'react-router-dom';


const SidebarContent = (props) => {
    let linkUrl = '/' + props.text.toLowerCase();
    return (

        <div className='sidebar__container'>
            <NavLink className='sidebar__container__link' to={linkUrl}>
                <img className='sidebar__container__link__icon' src={props.src} alt="" />
                <p className='sidebar__container__link__text'>{props.text}</p>
            </NavLink>
        </div>
    )
}

export default SidebarContent;