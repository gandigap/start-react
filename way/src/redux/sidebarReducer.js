let initialState = {
  sidebarLinks: [
    { iconSrc: '/assets/icons/user.svg', text: 'Profile' },
    { iconSrc: '/assets/icons/messages.svg', text: 'Messages' },
    { iconSrc: '/assets/icons/music.svg', text: 'Music' },
    { iconSrc: '/assets/icons/news.svg', text: 'News' },
    { iconSrc: '/assets/icons/news.svg', text: 'Users' },
    { iconSrc: '/assets/icons/settings.svg', text: 'Settings' }
  ],
  sidebarFriends: [
    { id: 1, name: 'Vera', photoFriend: '/assets/photoFriends/Vera.jpg' },
    { id: 2, name: 'Dan', photoFriend: '/assets/photoFriends/Dan.jpg' },
    { id: 3, name: 'Mat', photoFriend: '/assets/photoFriends/Mat.jpg' }
  ]
}

const sidebarReducer = (state = initialState, action) => state;

export default sidebarReducer;