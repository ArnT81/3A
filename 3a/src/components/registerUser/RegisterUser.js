import React, { useContext } from 'react';
import { ThemeContext } from '../themeContext/ThemeContext'
import { firebase, auth, db } from '../../firebase'
import Wrapper from '../wrapper/Wrapper'
import { Link } from 'react-router-dom'
import styles from './registerUser.module.css'

const RegistertUser = (props) => {
    const store = useContext(ThemeContext);

    const register = (user) => {
        user.preventDefault();
        db.collection('Users').add({
            firstname: user.target.firstname.value,
            lastname: user.target.lastname.value,
            username: user.target.username.value,
            password: user.target.password.value,
        });
        console.log(user.target)
    }

    return (
        <Wrapper>
            <div className={styles.registerUser} style={{ background: store.theme.get, color: store.color.get }}>
                <p>Register new user</p>
                <form name="form" onSubmit={register}>
                    <div >
                        <label htmlFor="firstname">First Name:</label>
                        <input type="text" name="firstname" />

                    </div>
                    <div>
                        <label htmlFor="lastname">Last Name:</label>
                        <input type="text" name="lastname" />
                    </div>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input type="text" name="username" />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" />
                    </div>
                    <div >
                        <button type="submit" >Register</button>
                        <button ><Link to="/login" >Cancel</Link></button>
                    </div>
                </form>
            </div >
        </Wrapper>
    )
}

export default RegistertUser;

