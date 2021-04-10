import React from 'react';

const Post = (props) => {
  return (
    <div className='profile__posts__post'>
      <img className='profile__posts__post__img' src='/assets/icons/user.svg' alt="" />
      {props.message}
      <div>
        <span>like</span>{props.likescount}
      </div>
    </div>
  )
}

export default Post;

