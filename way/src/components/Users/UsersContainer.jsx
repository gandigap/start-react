import Users from './Users';
import { connect } from 'react-redux';
import { followAC, setUsers, unfollowAC } from '../../redux/usersReducer';

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
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
      dispatch(setUsers(users))
    }
  }
}
const SidebarContainer = connect(mapStateToProps, mapsDispatchToProps)(Users)

export default SidebarContainer;