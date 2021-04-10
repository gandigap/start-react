
let Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize / 500);
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