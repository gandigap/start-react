let initialState = {
  sidebarLinks: [
    { iconSrc: '/icons/user.svg', text: 'Profile' },
    { iconSrc: '/icons/messages.svg', text: 'Messages' },
    { iconSrc: '/icons/music.svg', text: 'Music' },
    { iconSrc: '/icons/news.svg', text: 'News' },
    { iconSrc: '/icons/news.svg', text: 'Users' },
    { iconSrc: '/icons/settings.svg', text: 'Settings' }
  ],
  sidebarFriends: [
    { id: 1, name: 'Vera', photoFriend: '/photoFriends/Vera.jpg' },
    { id: 2, name: 'Dan', photoFriend: '/photoFriends/Dan.jpg' },
    { id: 3, name: 'Mat', photoFriend: '/photoFriends/Mat.jpg' }
  ]
}

const sidebarReducer = (state = initialState, action) => {

  return state;
}


export default sidebarReducer;