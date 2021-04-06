import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profileReducer';
import Post from './Post/Post.jsx';



const MyPosts = (props) => {
  let postsElements = props.posts.map((element) =>
    <Post message={element.message} likescount={element.likesCount} />);



  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = (element) => {
    let text = element.target.value;
    props.dispatch(updateNewPostActionCreator(text));
  }

  return (
    <div className='profile__posts'>My posts
      <div>
        <textarea
          name="" id="" cols="30" rows="3" placeholder='Enter your message'
          onChange={onPostChange} value={props.newPostText} />
        <button onClick={addPost}>Add post</button>
      </div>
      {postsElements}
    </div >
  )
}

export default MyPosts;