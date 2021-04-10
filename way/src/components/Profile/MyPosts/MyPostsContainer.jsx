import { addPost, updateNewPost } from '../../../redux/profileReducer';
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
    addPost: () => {
      dispatch(addPost());
    },
    updateNewPostText: (text) => {
      let action = updateNewPost(text);
      dispatch(action);
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapsDispatchToProps)(MyPosts)
export default MyPostsContainer;