import React from 'react';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogsReducer';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let state = props.store.getState().messagesPage;
    let dialogsElements = state.dialogs.map((element) =>
        <DialogItem name={element.name} id={element.id} src={element.photoFriend} login={element.login} />);

    let messagesElements = state.messages.map((element) =>
        <Message message={element.message} login={element.login} photoMessageSender={element.photoMessageSender} />);

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (element) => {
        let text = element.target.value;
        props.store.dispatch(updateNewMessageActionCreator(text));
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
                    name="" id="" cols="30" rows="3" placeholder='Enter your message'
                    onChange={onMessageChange}
                    value={state.newMessageText} />
                <button className="dialogs__new-message__button" onClick={addMessage}>Отправить</button>
            </div>

        </div>
    )
}

export default Dialogs;

