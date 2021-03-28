import React from 'react';
import Myposts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Profile = () => {
  return (
    <div className='profile'>
      <ProfileInfo />
      <Myposts />
    </div>
  )
}

export default Profile;