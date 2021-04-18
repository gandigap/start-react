import React from 'react';

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";

import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map((element) =>
        <DialogItem name={element.name} id={element.id} src={element.photoFriend} login={element.login} key={element.id} />);

    let messagesElements = state.messages.map((element) =>
        <Message message={element.message} login={element.login} photoMessageSender={element.photoMessageSender} key={element.id} />);


    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
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
            <AddMessageForm onSubmit={addNewMessage} />
        </div>
    )
}

export default Dialogs;

