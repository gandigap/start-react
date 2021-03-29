import React from 'react';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className='dialogs__items__item'>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className="messages__message">{props.message}</div>
    );
}

const Dialogs = (props) => {
    let dialogs = [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Olga' },
        { id: 3, name: 'Dan' },
        { id: 4, name: 'Vika' },
        { id: 5, name: 'Mick' },
    ]

    let messages = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hello' },
        { id: 3, message: 'How are you?' },
        { id: 4, message: 'Fine' },
        { id: 5, message: 'Ok' },
    ]

    let dialogsElements = dialogs.map((element) =>
        <DialogItem name={element.name} id={element.id} />);

    let messagesElements = messages.map((element) =>
        <Message message={element.message} />);

    return (
        <div className='dialogs'>
            <div className="dialogs__items">
                {dialogsElements}
            </div>
            <div className="messages">
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;

