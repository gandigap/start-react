let rerenderEntireTree = () => {
    console.log('state changed');
}

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you', likesCount: 12 },
            { id: 2, message: 'It`s my first post', likesCount: 22 }
        ],
        newPostText: 'it-kam'
    },
    messagesPage: {
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
        newMessageText: 'write message'
    },
    sidebarPage: {
        sidebarLinks: [
            { iconSrc: '/icons/user.svg', text: 'Profile' },
            { iconSrc: '/icons/messages.svg', text: 'Messages' },
            { iconSrc: '/icons/music.svg', text: 'Music' },
            { iconSrc: '/icons/news.svg', text: 'News' },
            { iconSrc: '/icons/settings.svg', text: 'Settings' }
        ],
        sidebarFriends: [
            { id: 1, name: 'Vera', photoFriend: '/photoFriends/Vera.jpg' },
            { id: 2, name: 'Dan', photoFriend: '/photoFriends/Dan.jpg' },
            { id: 3, name: 'Mat', photoFriend: '/photoFriends/Mat.jpg' }

        ]
    }
}

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const addMessage = () => {
    let newMessage = {
        id: 5,
        message: state.messagesPage.newMessageText,
        login: 'myLog',
        photoMessageSender: '/photoFriends/MyPhoto.png'
    };
    state.messagesPage.messages.push(newMessage);
    state.messagesPage.newMessageText = '';
    rerenderEntireTree(state);
}

export const updateNewMessageText = (newText) => {
    state.messagesPage.newMessageText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;