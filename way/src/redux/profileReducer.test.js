import profileReducer, { addPostAC, deletePost } from "./profileReducer";

let state = {
  posts: [
    { id: 1, message: 'Hi, how are you', likesCount: 12 },
    { id: 2, message: 'It`s my first post', likesCount: 22 }
  ]
}

test('length posts should be encremented', () => {
  let action = addPostAC('Ihar Berasneu');
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(3);
});


test('message of new post should be correct', () => {
  let action = addPostAC('Ihar Berasneu');
  let newState = profileReducer(state, action);
  expect(newState.posts[2].message).toBe('Ihar Berasneu');
});

test('after deleting length of posts should be decrement', () => {
  let action = deletePost(1);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(1);
});

