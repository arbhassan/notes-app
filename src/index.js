import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDd3tCI5rYbrGtQk2BtOxp1qLChnlFEsXo',
  authDomain: 'notes-app-3492f.firebaseapp.com',
  databaseURL: 'https://notes-app-3492f.firebaseio.com',
  projectId: 'notes-app-3492f',
  storageBucket: 'notes-app-3492f.appspot.com',
  messagingSenderId: '642235433609',
  appId: '1:642235433609:web:f550176fd1de2bc8',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
