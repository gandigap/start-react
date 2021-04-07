import React from 'react';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
    let state = props.store.getState().messagesPage;

    let onAddMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onNewMessageChange = (text) => {
        props.store.dispatch(updateNewMessageActionCreator(text));
    }


    return (
        <Dialogs
            addMessage={onAddMessage}
            updateNewMessageText={onNewMessageChange}
            messagesPage={state} />
    )
}

export default DialogsContainer;

