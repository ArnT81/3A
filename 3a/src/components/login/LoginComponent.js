import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../themeContext/ThemeContext';
import styles from './login.module.css';
import { firebase, db, auth } from '../../firebase'
import { Link } from 'react-router-dom'
import RegistertUser from '../registerUser/RegisterUser'


const LoginComponent = () => {
  const store = useContext(ThemeContext);
  const [adnan, setAdnan] = useState([]);
  const [wrongUser, setWrongUser] = useState(false);

  const loginUser = (e) => {
    e.preventDefault();
    adnan.find(user => {
      if (user.username === e.target.username.value && user.password === e.target.password.value) {
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
        setAdnan(users)
      })
      .catch(error => console.log(error))
  }, []);

  return (
    <React.Fragment>
      <div className={styles.login} style={{ background: store.theme.get, color: store.color.get }}>
        <h3>Login</h3>
        <form name="form" onSubmit={loginUser}>
          <div>
            <label>Email address:</label>
            <input name="username" type="text" aria-describedby="emailHelp" placeholder="Enter User Name" />
          </div>
          <div>
            <label>Password:</label>
            <input name="password" type="password" placeholder="Enter Password" />
          </div>
          {wrongUser ? <div >Your Email or Password is wrong!</div> : null}
          <button>Login</button>
          <div>
            <Link to={() => ({ ...RegistertUser, pathname: "/register" })} >Register</Link>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}
export default LoginComponent;
