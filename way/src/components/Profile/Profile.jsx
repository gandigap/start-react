import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Profile = (props) => {
  return (
    <div className='profile'>
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
    </div>
  )
}

export default Profile;