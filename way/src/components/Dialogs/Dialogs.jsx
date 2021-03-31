import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map((element) =>
        <DialogItem name={element.name} id={element.id} src={element.photoFriend} />);

    let messagesElements = props.messages.map((element) =>
        <Message message={element.message} />);

    let newMessageTextareaElement = React.createRef();

    let addNewMessage = () => {
        let text = newMessageTextareaElement.current.value;
        alert(text);
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
                <textarea className="dialogs__new-message__text" ref={newMessageTextareaElement} name="" id="" cols="30" rows="5"></textarea>
                <button className="dialogs__new-message__button" onClick={addNewMessage}>Отправить</button>
            </div>

        </div>
    )
}

export default Dialogs;

