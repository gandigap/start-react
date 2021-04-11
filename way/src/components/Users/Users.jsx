import { NavLink } from "react-router-dom";

import { usersAPI } from "../../api/api";

let Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let index = 1; index <= pagesCount; index++) {
    pages.push(index);
  }

  return (
    <div className='users'>
      <div className='users__pagination'>
        {pages.map(page => {
          return <span
            className={props.currentPage === page ? 'users__pagination__pagin selected__pagin' : 'users__pagination__pagin '}
            onClick={(event) => { props.onPageChanged(page) }}>{page}
          </span>
        })}
      </div>
      {
        props.users.map((user) => <div className='user-content' key={user.id}>
          <div className='user-content__logo'>
            <NavLink to={'/profile/' + user.id}>
              <img src={user.photos.small != null ? user.photos.small : '/assets/photoFriends/MyPhoto.png'} alt="" />
            </NavLink>
            {user.followed
              ? <button onClick={() => {
                usersAPI.unfollow(user.id)
                  .then(data => {
                    if (data.resultCode === 0) {
                      props.unfollow(user.id)
                    }
                  });

              }}>Unfollow</button>
              : <button onClick={() => {
                usersAPI.follow(user.id)
                  .then(data => {
                    if (data.resultCode === 0) {
                      props.follow(user.id)
                    }
                  });

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