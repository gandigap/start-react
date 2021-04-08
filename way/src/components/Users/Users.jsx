let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      { id: 1, photoUrl: '/icons/user.svg', followed: false, fullName: 'Igor', status: 'Í am a boss', location: { city: 'Minsk', country: 'Belarus' } },
      { id: 2, photoUrl: '/icons/user.svg', followed: true, fullName: 'Sasha', status: 'Í am a boss too', location: { city: 'Moscow', country: 'Russia' } },
      { id: 3, photoUrl: '/icons/user.svg', followed: false, fullName: 'Andrey', status: 'Í am a boss giper boss', location: { city: 'Kiev', country: 'Ukarain' } }
    ])
  };


  return (
    <div>
      {
        props.users.map((user) => <div className='user-content' key={user.id}>
          <div className='user-content__logo'>
            <img src={user.photoUrl} alt="" />
            {user.followed
              ? <button onClick={() => {
                props.unfollow(user.id)
              }}>Unfollow</button>
              : <button onClick={() => {
                props.follow(user.id)
              }}>Follow</button>}
          </div>
          <div className='user-content__info'>
            <p>{user.fullName}</p>
            <p>{user.status}</p>
            <p>{user.location.city}</p>
            <p>{user.location.country}</p>
          </div>
        </div>)
      }



    </div>
  )
}

export default Users;