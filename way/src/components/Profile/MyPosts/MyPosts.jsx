import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/state.js';
import Post from './Post/Post.jsx';



const MyPosts = (props) => {
  let postsElements = props.posts.map((element) =>
    <Post message={element.message} likescount={element.likesCount} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostActionCreator(text));
  }

  return (
    <div className='profile__posts'>My posts
      <div>
        <textarea ref={newPostElement}
          name="" id="" cols="30" rows="3"
          onChange={onPostChange} value={props.newPostText} />
        <button onClick={addPost}>Add post</button>
      </div>
      {postsElements}
    </div >
  )
}

export default MyPosts;