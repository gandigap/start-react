import React from 'react';
import Myposts from './MyPosts/MyPosts.jsx';


const Profile = () => {
  return (
    <main className='main'>
      <figure>
        <img className="main__hat-logo" src='' alt="" />
      </figure>
      <div>ava + description</div>
      <Myposts />
    </main>
  )
}

export default Profile;