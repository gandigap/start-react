import React from 'react';
import Post from './Post/Post.jsx';
import { Field, reduxForm } from 'redux-form';



const MyPosts = (props) => {
  let postsElements = props.posts.map((element) =>
    <Post message={element.message} likescount={element.likesCount} key={element.id} />);

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

  return (
    <div className='profile__posts'>My posts
      <AddNewPostForm onSubmit={onAddPost} />
      {postsElements}
    </div >
  )
}


let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name="newPostText" component={'textarea'} />
      <button>Add post</button>
    </form>
  )
}

AddNewPostForm = reduxForm({ from: 'ProfileAddNewPostForm' })(AddNewPostForm);

export default MyPosts;