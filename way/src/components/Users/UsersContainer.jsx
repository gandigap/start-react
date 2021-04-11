import React from 'react';
import { connect } from 'react-redux';
import { follow, setUsers, setCurrentPage, unfollow, setTotalUsersCount, toogleIsFetching } from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import { usersAPI } from '../../api/api';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.toogleIsFetching(true);
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then(data => {
        this.props.toogleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.toogleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    usersAPI.getUsers(pageNumber, this.props.pageSize)
      .then(data => {
        this.props.toogleIsFetching(false);
        this.props.setUsers(data.items);
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


export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toogleIsFetching
})(UsersContainer);
