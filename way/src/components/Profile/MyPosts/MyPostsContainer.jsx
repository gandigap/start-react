import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let onAddPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  let onPostChange = (text) => {
    let action = updateNewPostActionCreator(text);
    props.store.dispatch(action);
  }

  return (
    <MyPosts
      addPost={onAddPost}
      updateNewPostText={onPostChange}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText} />
  )
}

export default MyPostsContainer;