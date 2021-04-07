import React from 'react';
import Post from './Post/Post.jsx';

const MyPosts = (props) => {
  let postsElements = props.posts.map((element) =>
    <Post message={element.message} likescount={element.likesCount} key={element.id} />);

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className='profile__posts'>My posts
      <div>
        <textarea
          ref={newPostElement}
          name="" id="" cols="30" rows="3" placeholder='Enter your message'
          onChange={onPostChange}
          value={props.newPostText} />
        <button onClick={onAddPost}>Add post</button>
      </div>
      {postsElements}
    </div >
  )
}

export default MyPosts;