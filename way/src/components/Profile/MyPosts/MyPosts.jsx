import React from 'react';
import Post from './Post/Post.jsx';

const MyPosts = (props) => {


  let postsElements = props.posts.map((element) =>
    <Post message={element.message} likescount={element.likesCount} />);

  return (
    <div className='profilePosts'>My posts
      <div>
        <textarea name="" id="" cols="30" rows="5"></textarea>
        <button>Add post</button>
      </div>
      {postsElements}

    </div >
  )
}

export default MyPosts;