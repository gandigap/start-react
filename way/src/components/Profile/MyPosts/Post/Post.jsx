import React from 'react';
import profilePhoto from '../../../../assets/icons/profile-user.svg'

const Post = (props) => {
  return (
    <div className='post'>
      <img className='post__img' src={profilePhoto} alt="" />
      {props.message}
      <div>
        <span>like</span>{props.likescount}
      </div>
    </div>
  )
}

export default Post;

