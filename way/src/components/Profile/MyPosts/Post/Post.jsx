import React from 'react';

const Post = (props) => {
  return (
    <div className='post'>
      <img className='post__img' src='icons/user.svg' alt="" />
      {props.message}
      <div>
        <span>like</span>{props.likescount}
      </div>
    </div>
  )
}

export default Post;

