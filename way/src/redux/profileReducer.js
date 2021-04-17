import { profileAPI, usersAPI } from "../api/api";
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you', likesCount: 12 },
    { id: 2, message: 'It`s my first post', likesCount: 22 }
  ],
  profile: null,
  status: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newText = {
        id: 5,
        message: action.newPostText,
        likesCount: 0
      };

      return {
        ...state,
        posts: [...state.posts, newText],
        newPostText: ''
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      };
    default:
      return state;
  }
}


export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const addPost = (newPostText) => ({ type: ADD_POST }, newPostText);
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId)
      .then(data => {
        dispatch(setStatus(data));
      });
  }
}

export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(setStatus(status));
        }
      });
  }
}

export const getUserProfile = (userId) => {
  return (dispatch) => {
    usersAPI.getProfile(userId)
      .then(data => {
        dispatch(setUserProfile(data));
      });
  }
}

export default profileReducer;