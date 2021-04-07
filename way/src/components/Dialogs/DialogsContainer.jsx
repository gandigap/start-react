import React from 'react';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogsReducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';


const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {

                let state = store.getState().messagesPage;

                let onAddMessage = () => {
                    store.dispatch(addMessageActionCreator());
                }

                let onNewMessageChange = (text) => {
                    store.dispatch(updateNewMessageActionCreator(text));
                }
                return (
                    <Dialogs
                        addMessage={onAddMessage}
                        updateNewMessageText={onNewMessageChange}
                        messagesPage={state} />
                );
            }}
        </StoreContext.Consumer>

    )
}

export default DialogsContainer;

