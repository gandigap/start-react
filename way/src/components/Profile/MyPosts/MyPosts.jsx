import React from 'react';
import Post from './Post/Post.jsx';
import { Field, reduxForm } from 'redux-form';

let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component="textarea" name="newPostText" />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm);


const MyPosts = (props) => {
  let postsElements =
    props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

  return (
    <div className='profile__posts'>My posts
      <AddNewPostFormRedux onSubmit={onAddPost} />
      {postsElements}
    </div >
  )
}




export default MyPosts;