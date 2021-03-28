import React from 'react';
import { NavLink } from 'react-router-dom';

const DialogItem = () => {
    return (
        <div className='dialogs__items__item'>
            <NavLink to='/dialogs/2'>Olga</NavLink>
        </div>
    );
}

const Dialogs = (props) => {
    return (
        <div className='dialogs'>
            <div className="dialogs__items">
                <div className='dialogs__items__item active'>
                    <NavLink to='/dialogs/1'>Andrey</NavLink>
                </div>
                <div className='dialogs__items__item'>
                    <NavLink to='/dialogs/2'>Olga</NavLink>
                </div>
                <div className='dialogs__items__item'>
                    <NavLink to='/dialogs/3'>Viktor</NavLink>
                </div>
                <div className='dialogs__items__item'>
                    <NavLink to='/dialogs/4'>Dan</NavLink>
                </div>
            </div>
            <div className="messages">
                <div className="messages__message">Hi</div>
                <div className="messages__message">How are you?</div>
                <div className="messages__message">Fine</div>
            </div>
        </div>
    )
}

export default Dialogs;

