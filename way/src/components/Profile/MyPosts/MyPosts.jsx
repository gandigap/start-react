import React from 'react';
import Post from './Post/Post.jsx';

const MyPosts = (props) => {


  let postsElements = props.posts.map((element) =>
    <Post message={element.message} likescount={element.likesCount} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    debugger;
    let text = newPostElement.current.value;
    props.addPost(text);
  }

  return (
    <div className='profile__posts'>My posts
      <div>
        <textarea ref={newPostElement} name="" id="" cols="30" rows="5"></textarea>
        <button onClick={addPost}>Add post</button>
      </div>
      {postsElements}

    </div >
  )
}

export default MyPosts;