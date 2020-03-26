import React, { Component } from 'react';
import styles from './login.module.css';
// import firebase from '../../firebase.js ';


// firebase.firestore().collection('Users').add({
//   Name: 'Anders',
//   lastName: 'Sulub'
// });
const Login = () => {
  return (
    <div>
      <p className={styles.para}>Login component works</p>
    </div>
  );
}


export default Login;
