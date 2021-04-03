let store = {
    _state: {
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
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state changed');
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addMessage() {
        let newMessage = {
            id: 5,
            message: this._state.messagesPage.newMessageText,
            login: 'myLog',
            photoMessageSender: '/photoFriends/MyPhoto.png'
        };
        this._state.messagesPage.messages.push(newMessage);
        this._state.messagesPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newText) {
        this._state.messagesPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}
window.store = store;
export default store;