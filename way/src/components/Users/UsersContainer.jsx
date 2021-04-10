import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { followAC, setUsersAC, setCurrentPageAC, unfollowAC, setTotalUsersCountAC, toogleIsFetchingAC } from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.toogleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.toogleIsFetching(false);
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
    });
  }

  onPageChanged = (pageNumber) => {
    this.props.toogleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
      this.props.toogleIsFetching(false);
      this.props.setUsers(response.data.items);
    });
  }

  render() {
    return <>

      {this.props.isFetching ? <Preloader /> : null}
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow} />
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}

let mapsDispatchToProps = (dispatch) => {
  return {
    follow: (userID) => {
      dispatch(followAC(userID))
    },
    unfollow: (userID) => {
      dispatch(unfollowAC(userID))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount))
    },
    toogleIsFetching: (isFetching) => {
      dispatch(toogleIsFetchingAC(isFetching))
    }
  }
}

const SidebarContainer = connect(mapStateToProps, mapsDispatchToProps)(UsersContainer)

export default SidebarContainer;