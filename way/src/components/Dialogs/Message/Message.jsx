import React from 'react';

const Message = (props) => {
    let typeMessageContainer = props.login === 'myLog' ? 'your-message-container' : 'own-message-container';
    return (
        <div className={`dialogs__messages__message-container ${typeMessageContainer}`}>
            <img className="dialogs__messages__message-container__photo-author" src={props.photoMessageSender} alt={props.login} />
            <p className="dialogs__messages__message-container__message">{props.message}</p>
        </div>
    );
}

export default Message;

