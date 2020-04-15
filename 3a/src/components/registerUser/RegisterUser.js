import React, { useContext } from 'react';
import { ThemeContext } from '../themeContext/ThemeContext'
import { firebase, auth, db } from '../../firebase'
import Wrapper from '../wrapper/Wrapper'
import { Link } from 'react-router-dom'
import styles from './registerUser.module.css'


const RegistertUser = (props) => {
    const store = useContext(ThemeContext);
    const register = (e) => {
        e.preventDefault();
        db.collection('Users').add({
            firstname: e.target.firstname.value,
            lastname: e.target.lastname.value,
            username: e.target.username.value,
            password: e.target.password.value,
        });
        store.user.set(true);
    }


    return (
        <Wrapper>
            <div className={styles.registerUser} style={{ color: store.color.get }}>
                <p>Register new user</p>
                <form name="form" onSubmit={register}>
                    <div >
                        <label htmlFor="firstname">First Name:</label>
                        <input placeholder="You'r First Name Here" type="text" name="firstname" />
                    </div>
                    <div>
                        <label htmlFor="lastname">Last Name:</label>
                        <input placeholder="You'r Last Name Here" type="text" name="lastname" />
                    </div>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input placeholder="You'r User Name Here" type="text" name="username" />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input placeholder="You'r Password Here" type="password" name="password" />
                    </div>
                    <div >
                        <button type="submit" >Register</button>
                        <Link to={LoginComponent => ({ ...LoginComponent, pathname: "/login" })} >Cancel</Link>
                    </div>
                </form>
            </div >
        </Wrapper>
    )
}


export default RegistertUser;

