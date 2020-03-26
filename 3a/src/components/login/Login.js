import React, { Component } from 'react';
import styles from './login.module.css';
// import firebase from '../../firebase.js ';
const Login = (props) => {

  return (
    <React.Fragment className= {styles.login}>
      
      <form>
        <div>
          <label style={{ color: props.theme.color }}>Email address</label>
          <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        <div>
          <label style={{ color: props.theme.color }}>Password</label>
          <input type="password" className="form-control" placeholder="Password" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email and password with anyone else.</small>
        </div>
        <button className="btn btn-success">login</button>
      </form>
    </React.Fragment>
  );
}


export default Login;
