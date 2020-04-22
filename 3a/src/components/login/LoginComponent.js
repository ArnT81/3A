import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../themeContext/ThemeContext';
import styles from './login.module.css';
import { db } from '../../firebase'
import { Link } from 'react-router-dom'
import RegistertUser from '../registerUser/RegisterUser'
import { useForm } from 'react-hook-form'

/**
 * Login function component takes data from firebase with useEffect hook, 
 * loginUser matches login inputs with firebase data and logins when matches or shows error in 3 seconds when wrong.
 * Simple validating with useForm.
 */
const LoginComponent = () => {
  const store = useContext(ThemeContext);
  const { register, handleSubmit } = useForm()
  const [loginAuth, setLoginAuth] = useState([]);
  const [wrongUser, setWrongUser] = useState(false);

  const loginUser = (data) => {

    // eslint-disable-next-line array-callback-return
    loginAuth.find((user) => {
      if (user.username === data.username && user.password === data.password) {
        store.user.set(true);
      }
      else {
        setWrongUser(true);
        setTimeout(() => {
          setWrongUser(false);
        }, 3000);
      }
    })
  }

  useEffect(() => {
    db.collection('Users')
      .get()
      .then(snapshot => {
        const users = []
        snapshot.forEach(doc => {
          const data = doc.data()
          users.push(data)
        })
        setLoginAuth(users)
      })
      .catch(error => console.log(error))
  }, []);

  return (
    <React.Fragment>
      <div className={styles.login} style={{ background: store.mainTheme.get, color: store.color.get }}>
        <h3>Login</h3>
        <form name="form" onSubmit={handleSubmit(loginUser)}>
          <div>
            <label>Email address:</label>
            <input ref={register({ required: true })} name="username" type="text" aria-describedby="emailHelp" placeholder="Enter User Name" />
          </div>
          <div>
            <label>Password:</label>
            <input ref={register({ required: true, minLength: 6 })} name="password" type="password" placeholder="Enter Password" />
          </div>
          {wrongUser ? <div className={styles.wrongUser} >Your Email or Password is wrong!</div> : null}
          <button>Login</button>
          <div>
            <Link to={() => ({ ...RegistertUser, pathname: "/register" })} >Not a member? Register now</Link>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}
export default LoginComponent;
