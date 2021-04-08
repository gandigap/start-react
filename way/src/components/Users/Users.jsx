let Users = (props) => {
  return (
    <div>
      {
        props.users.map((user) => <div className='user-content' key={user.id}>
          <div className='user-content__logo'>
            <img src={user.photoUrl} alt="" />
            <button>Follow</button>
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