import React from 'react'
import * as axios from 'axios';


class Users extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
    });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items);
    });
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize / 500);
    let pages = [];
    for (let index = 1; index <= pagesCount; index++) {
      pages.push(index);
    }
    return (
      <div className='users'>
        <div className='users__pagination'>
          {pages.map(page => {
            return <span
              className={this.props.currentPage === page ? 'users__pagination__pagin selected__pagin' : 'users__pagination__pagin '}
              onClick={(event) => { this.onPageChanged(page) }}>{page}
            </span>
          })}
        </div>
        {
          this.props.users.map((user) => <div className='user-content' key={user.id}>
            <div className='user-content__logo'>
              <img src={user.photos.small != null ? user.photos.small : '/photoFriends/MyPhoto.png'} alt="" />
              {user.followed
                ? <button onClick={() => {
                  this.props.unfollow(user.id)
                }}>Unfollow</button>
                : <button onClick={() => {
                  this.props.follow(user.id)
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


}

export default Users;