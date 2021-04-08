const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
  users: [
    { id: 1, photoUrl: '/icons/user.svg', followed: false, fullName: 'Igor', status: 'Í am a boss', location: { city: 'Minsk', country: 'Belarus' } },
    { id: 1, photoUrl: '/icons/user.svg', followed: true, fullName: 'Sasha', status: 'Í am a boss too', location: { city: 'Moscow', country: 'Russia' } },
    { id: 1, photoUrl: '/icons/user.svg', followed: false, fullName: 'Andrey', status: 'Í am a boss giper boss', location: { city: 'Kiev', country: 'Ukarain' } },
  ],
  newPostText: ''
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.userID === action.userID) {
            return { ...user, followed: true }
          }
          return user;
        })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.userID === action.userID) {
            return { ...user, followed: false }
          }
          return user;
        })
      };
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users]

      };
    default:
      return state;
  }
}


export const followAC = (userID) => ({ type: FOLLOW, userID });
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID });
export const setUsers = (users) => ({ type: SET_USERS, users });

export default usersReducer;