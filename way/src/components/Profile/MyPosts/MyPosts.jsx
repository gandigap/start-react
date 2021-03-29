import React from 'react';
import Post from './Post/Post.jsx';

const Myposts = () => {
  let posts = [
    { id: 1, message: 'Hi, how are you', likesCount: 12 },
    { id: 2, message: 'It`s my first post', likesCount: 22 }

  ]

  let postsElements = posts.map((element) =>
    <Post message={element.message} likescount={element.likesCount} />);

  return (
    <div className='myposts'>My posts
      <div>
        <textarea name="" id="" cols="30" rows="5"></textarea>
        <button>Add post</button>
      </div>
      <div>

        {postsElements}
      </div>
    </div >
  )
}

export default Myposts;