const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
  dialogs: [
    { id: 1, name: 'Dan', photoFriend: '/photoFriends/Dan.jpg', login: 'supDan' },
    { id: 2, name: 'Mat', photoFriend: '/photoFriends/Mat.jpg', login: 'Matt' },
    { id: 3, name: 'Kate', photoFriend: '/photoFriends/Kate.jpg', login: 'katuha' },
    { id: 4, name: 'Kim', photoFriend: '/photoFriends/Kim.jpg', login: 'kim99' },
    { id: 5, name: 'Olga', photoFriend: '/photoFriends/Olga.jpg', login: 'ol322' },
  ],
  messages: [
    { id: 1, message: 'Hi', login: 'supDan', photoMessageSender: '/photoFriends/Dan.jpg' },
    { id: 2, message: 'Hello', login: 'myLog', photoMessageSender: '/photoFriends/MyPhoto.png' },
    { id: 3, message: 'How are you?', login: 'supDan', photoMessageSender: '/photoFriends/Dan.jpg' },
    { id: 4, message: 'Fine', login: 'myLog', photoMessageSender: '/photoFriends/MyPhoto.png' },
    { id: 5, message: 'Ok', login: 'myLog', photoMessageSender: '/photoFriends/MyPhoto.png' },
  ],
  newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = {
        id: 5,
        message: state.newMessageText,
        login: 'myLog',
        photoMessageSender: '/photoFriends/MyPhoto.png'
      };
      let stateCopy = { ...state };
      stateCopy.messages = [...state.messages];
      stateCopy.messages.push(newMessage);
      stateCopy.newMessageText = '';
      return stateCopy;
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      let stateCopy = { ...state };
      stateCopy.messages = [...state.messages];
      stateCopy.newMessageText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageActionCreator = (text) =>
  ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })


export default dialogsReducer;