import React from 'react';
import Wrapper from '../wrapper/Wrapper'
import styles from './login.module.css';
// import firebase from '../../firebase.js ';
const Login = (props) => {
  console.log(props)

  const Login = (e) => {
    console.log('clicked ', 'Login')
    e.preventDefault()
  }

  return (
    <React.Fragment>
      <Wrapper>
        <div className={styles.login}>
          <h3 style={{ color: props.theme.color }}>Login</h3>
          <form name="form" onSubmit={Login}>
            <div>
              <label style={{ color: props.theme.color }}>Email address:</label>
              <input type="email" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div>
              <label style={{ color: props.theme.color }}>Password:</label>
              <input type="password" placeholder="Password" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email and password with anyone else.</small>
            </div>
            <button>login</button>
            <div>
              <p style={{ color: props.theme.color }}>Not a member yet? Create your account</p>
            </div>
          </form>
        </div>
      </Wrapper>
    </React.Fragment>
  );
}


export default Login;
