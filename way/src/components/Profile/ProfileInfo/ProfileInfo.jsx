import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    } else {
        let subjects = props.profile.contacts;


        let a = Object.keys(subjects).map((item, i) => {
            if (!subjects[item]) {
                return <></>;
            } else {
                return <div>
                    <img src={i} alt="" />
                    <p className='new' key={i}>{item} - {subjects[item]}</p>
                </div>
            }
        });

        return (
            <div className='profile-info'>

                <figure className='profile-info__photo'>
                    <img className='profile-info__photo__img' src={props.profile.photos.small} alt="" />
                    <figcaption className='profile-info__photo__fullname'>{props.profile.fullName}</figcaption>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
                </figure>
                <div className='profile-info__description'>{props.profile.aboutMe}</div>
                <div className='profile-info__contacts'>{a}</div>
                <div className='profile-info__contacts'>В поисках работы {props.profile.lookingForAJob ? 'Да' : 'Нет'}</div>
                <a href={'http://' + props.profile.contacts.facebook}>Link</a>
            </div>
        )
    }

}

export default ProfileInfo;

