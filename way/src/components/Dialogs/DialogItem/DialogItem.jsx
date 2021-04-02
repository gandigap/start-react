import React from 'react';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <NavLink className='dialogs__items__item' to={path}>
            <img className='dialogs__items__item__photo' src={props.src} alt={props.login} />
            <p className='dialogs__items__item__name'>{props.name}</p>
        </NavLink>


    );
}

export default DialogItem;

