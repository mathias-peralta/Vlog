import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Firebase from "firebase";

Firebase.initializeApp({
  apiKey: "AIzaSyA-Pk3gadjQuxhQGz-x2w-69wjeJHyMZm4",
  authDomain: "vlog-7a01f.firebaseapp.com",
  projectId: "vlog-7a01f",
  storageBucket: "vlog-7a01f.appspot.com",
  messagingSenderId: "300932314320",
  appId: "1:300932314320:web:4989984df78e1d78dc1ad5",
  measurementId: "G-SK7X57ZWE8"
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);