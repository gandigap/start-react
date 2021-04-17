import { addPost } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const mapsDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPost(newPostText));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapsDispatchToProps)(MyPosts)
export default MyPostsContainer;