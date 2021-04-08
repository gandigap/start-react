
import * as axios from 'axios';
let Users = (props) => {
  if (props.users.length === 0) {

    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      props.setUsers(response.data.items);
    });


  };


  return (
    <div>
      {
        props.users.map((user) => <div className='user-content' key={user.id}>
          <div className='user-content__logo'>
            <img src={user.photos.small != null ? user.photos.small : '/photoFriends/MyPhoto.png'} alt="" />
            {user.followed
              ? <button onClick={() => {
                props.unfollow(user.id)
              }}>Unfollow</button>
              : <button onClick={() => {
                props.follow(user.id)
              }}>Follow</button>}
          </div>
          <div className='user-content__info'>
            <p>{user.name}</p>
            <p>{user.status}</p>
            <p>{/* user.location.city */}</p>
            <p>{/* user.location.country */}</p>
          </div>
        </div>)
      }



    </div>
  )
}

export default Users;