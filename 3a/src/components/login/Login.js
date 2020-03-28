import React, { Component } from 'react';
import Wrapper from '../wrapper/Wrapper'
import styles from './login.module.css';
// import firebase from '../../firebase.js ';
const Login = (props) => {

  return (
    <React.Fragment>
      <Wrapper>
        <div className={styles.login}>
          <form>
            <div>
              <label style={{ color: props.theme.color }}>Email address</label>
              <input type="email" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div>
              <label style={{ color: props.theme.color }}>Password</label>
              <input type="password" placeholder="Password" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email and password with anyone else.</small>
            </div>
            <button className="btn btn-success">login</button>
          </form>
        </div>
      </Wrapper>
    </React.Fragment>
  );
}


export default Login;
