import { NavLink } from "react-router-dom";

let User = ({ user, followingInProgress, unfollow, follow }) => {

  return (
    <div className='users'>
      <div className='user-content' key={user.id}>
        <div className='user-content__logo'>
          <NavLink to={'/profile/' + user.id}>
            <img src={user.photos.small != null ? user.photos.small : '/assets/photoFriends/MyPhoto.png'} alt="" />
          </NavLink>
          {user.followed
            ? <button className='button_status_follow' disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
              unfollow(user.id);
            }}>Unfollow</button>
            : <button className='button_status_follow' disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
              follow(user.id);
            }}>Follow</button>}
        </div>
        <div className='user-content__info'>
          <p>{user.name}</p>
          <p>{user.status}</p>
          <p>{/* user.location.city */}</p>
          <p>{/* user.location.country */}</p>
        </div>
      </div>

    </div>
  )
}
export default User;