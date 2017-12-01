import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp({
  apiKey: "AIzaSyCqNofmHZbxUSnPRV1-0PIildEy5UcpiUs",
  authDomain: "pseudogram-a242a.firebaseapp.com",
  databaseURL: "https://pseudogram-a242a.firebaseio.com",
  projectId: "pseudogram-a242a",
  storageBucket: "pseudogram-a242a.appspot.com",
  messagingSenderId: "511363479407"
  //Project public-facing name: project-511363479407
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();
