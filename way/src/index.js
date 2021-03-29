import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, message: 'Hi, how are you', likesCount: 12 },
  { id: 2, message: 'It`s my first post', likesCount: 22 }
]

let dialogs = [
  { id: 1, name: 'Dima' },
  { id: 2, name: 'Olga' },
  { id: 3, name: 'Dan' },
  { id: 4, name: 'Vika' },
  { id: 5, name: 'Mick' },
]

let messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'Hello' },
  { id: 3, message: 'How are you?' },
  { id: 4, message: 'Fine' },
  { id: 5, message: 'Ok' },
]


ReactDOM.render(
  <React.StrictMode>
    <App messages={messages} dialogs={dialogs} posts={posts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
