import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map((element) =>
        <DialogItem name={element.name} id={element.id} src={element.photoFriend} />);

    let messagesElements = props.messages.map((element) =>
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

