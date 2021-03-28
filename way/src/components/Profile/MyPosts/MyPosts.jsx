import React from 'react';
import Post from './Post/Post.jsx';

const Myposts = () => {
  return (
    <div className='myposts'>My posts
      <div>
        <textarea name="" id="" cols="30" rows="5"></textarea>
        <button>Add post</button>
      </div>
      <div>
        <Post message='Hi, how are you' likescount='1' />
        <Post message='It`s my first post' likescount='28' />


      </div>
    </div >
  )
}

export default Myposts;