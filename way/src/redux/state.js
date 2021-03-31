

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you', likesCount: 12 },
            { id: 2, message: 'It`s my first post', likesCount: 22 }
        ],
    },
    messagesPage: {
        dialogs: [
            { id: 1, name: 'Dan', photoFriend: '/photoFriends/Dan.jpg' },
            { id: 2, name: 'Mat', photoFriend: '/photoFriends/Mat.jpg' },
            { id: 3, name: 'Kate', photoFriend: '/photoFriends/Kate.jpg' },
            { id: 4, name: 'Kim', photoFriend: '/photoFriends/Kim.jpg' },
            { id: 5, name: 'Olga', photoFriend: '/photoFriends/Olga.jpg' },
        ],
        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'Hello' },
            { id: 3, message: 'How are you?' },
            { id: 4, message: 'Fine' },
            { id: 5, message: 'Ok' },
        ]
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

export let addPost = (postMessage) => {
    debugger;
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
}
export default state;