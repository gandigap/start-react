import React from 'react';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let state = props.messagesPage;

    let dialogsElements = state.dialogs.map((element) =>
        <DialogItem name={element.name} id={element.id} src={element.photoFriend} login={element.login} key={element.id} />);

    let messagesElements = state.messages.map((element) =>
        <Message message={element.message} login={element.login} photoMessageSender={element.photoMessageSender} key={element.id} />);

    /* let newMessageText = state.newMessageText; */

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageText);
    }

    if (!props.isAuth) return <Redirect to={'/login'} />;

    return (
        <div className='dialogs'>
            <div className="dialogs__items">
                {dialogsElements}
            </div>
            <div className="dialogs__messages">
                {messagesElements}
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className="dialogs__new-message">

            <h3 className="dialogs__new-message__title">New message</h3>
            <Field className="dialogs__new-message__text" component='textarea' name='newMessageText' placeholder='Enter your message' />
            <button className="dialogs__new-message__button" >Отправить</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);

export default Dialogs;

