import React, { useContext } from 'react';
import { ThemeContext } from '../themeContext/ThemeContext';
// import firebase from '../../firebase.js ';
import styles from './login.module.css';

const Login = () => {
  const store = useContext(ThemeContext);
  
  const Login = (e) => {
    e.preventDefault();
    store.user.set(true);
  }

  return (
    <React.Fragment>
      <div className={styles.login} style={{ background: store.theme.get, color: store.color.get }}>
        <h3>Login</h3>
        <form name="form" onSubmit={Login}>
          <div>
            <label>Email address:</label>
            <input type="email" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" placeholder="Password" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email and password with anyone else.</small>
          </div>
          <button>login</button>
          <div>
            <p>Not a member yet? Create your account</p>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Login;
