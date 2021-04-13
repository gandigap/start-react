import { usersAPI } from "../api/api";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you', likesCount: 12 },
    { id: 2, message: 'It`s my first post', likesCount: 22 }
  ],
  newPostText: '',
  profile: null
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let text = state.newPostText;
      return {
        ...state,
        newPostText: '',
        posts: [...state.posts, { id: 5, message: text, likesCount: 0 }]
      };

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      };
    default:
      return state;
  }
}


export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const addPost = () => ({ type: ADD_POST });
export const updateNewPost = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const getUserProfile = (userId) => {
  return (dispatch) => {
    usersAPI.getProfile(userId)
      .then(data => {
        dispatch(setUserProfile(data));
      });
  }
}

export default profileReducer;