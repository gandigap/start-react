import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map((element) =>
        <DialogItem name={element.name} id={element.id} src={element.photoFriend} login={element.login} />);

    let messagesElements = props.messages.map((element) =>
        <Message message={element.message} login={element.login} photoMessageSender={element.photoMessageSender} />);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch({ type: 'ADD-MESSAGE' });
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        let action = { type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text }
        props.dispatch(action);
    }


    return (
        <div className='dialogs'>
            <div className="dialogs__items">
                {dialogsElements}
            </div>
            <div className="dialogs__messages">
                {messagesElements}
            </div>
            <div className="dialogs__new-message">
                <h3 className="dialogs__new-message__title">New message</h3>
                <textarea className="dialogs__new-message__text"
                    ref={newMessageElement} name="" id="" cols="30" rows="3"
                    onChange={onMessageChange} value={props.newMessageText} />
                <button className="dialogs__new-message__button" onClick={addMessage}>Отправить</button>
            </div>

        </div>
    )
}

export default Dialogs;

