const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
  dialogs: [
    { id: 1, name: 'Dan', photoFriend: '/assets/photoFriends/Dan.jpg', login: 'supDan' },
    { id: 2, name: 'Mat', photoFriend: '/assets/photoFriends/Mat.jpg', login: 'Matt' },
    { id: 3, name: 'Kate', photoFriend: '/assets/photoFriends/Kate.jpg', login: 'katuha' },
    { id: 4, name: 'Kim', photoFriend: '/assets/photoFriends/Kim.jpg', login: 'kim99' },
    { id: 5, name: 'Olga', photoFriend: '/assets/photoFriends/Olga.jpg', login: 'ol322' },
  ],
  messages: [
    { id: 1, message: 'Hi', login: 'supDan', photoMessageSender: '/assets/photoFriends/Dan.jpg' },
    { id: 2, message: 'Hello', login: 'myLog', photoMessageSender: '/assets/photoFriends/MyPhoto.png' },
    { id: 3, message: 'How are you?', login: 'supDan', photoMessageSender: '/assets/photoFriends/Dan.jpg' },
    { id: 4, message: 'Fine', login: 'myLog', photoMessageSender: '/assets/photoFriends/MyPhoto.png' },
    { id: 5, message: 'Ok', login: 'myLog', photoMessageSender: '/assets/photoFriends/MyPhoto.png' },
  ]
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let text = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 5, message: text, login: 'myLog', photoMessageSender: '/assets/photoFriends/MyPhoto.png' }]
      };
    default:
      return state;
  }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })


export default dialogsReducer;