import React from 'react';
import mainImgSrc from '../../../assets/icons/main-img.svg';

const ProfileInfo = (props) => {
    return (
        <div className='profile-info'>
            <figure>
                <img className="profile__hat-logo" src={mainImgSrc} alt="" />
            </figure>
            <div>ava + description
            https://www.behance.net/gallery/106334253/Social-network-concept?tracking_source=search_projects_recommended%7Csocial%20network
            </div>
        </div>
    )
}

export default ProfileInfo;

