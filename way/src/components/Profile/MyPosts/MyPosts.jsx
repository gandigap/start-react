import React from 'react';
import Post from './Post/Post.jsx';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators.js';
import { TextArea } from '../../common/FormsControls/FormsControls.jsx';

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
  return (
    <form className='profile__posts__form' onSubmit={props.handleSubmit}>
      <Field component={TextArea} name="newPostText" validate={[required, maxLength10]} placeholder={'Post message'} />
      <button className='profile__posts__form__button'>Add post</button>
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
    <div className='profile__posts'>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      {postsElements}
    </div >
  )
}




export default MyPosts;