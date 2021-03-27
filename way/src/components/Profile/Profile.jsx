import React from 'react';
import Myposts from './MyPosts/MyPosts.jsx';
import mainImgSrc from '../../assets/icons/main-img.svg';


const Profile = () => {
  return (
    <main className='main'>
      <figure>
        <img className="main__hat-logo" src={mainImgSrc} alt="" />
      </figure>
      <div>ava + description</div>
      <Myposts />
    </main>
  )
}

export default Profile;