import React, { useState, useEffect, } from 'react';
import { firebase, auth, db } from '../../firebase'
import Wrapper from '../wrapper/Wrapper'
import { Link } from 'react-router-dom'
import styles from './registerUser.module.css'

const RegistertUser = (props) => {

    console.log()
    const register = (user) => {

        user.preventDefault();

        // auth.createUserWithEmailAndPassword(email, password)
        db.collection('Users').add({
            firstname: user.target.firstname.value,
            lastname: user.target.lastname.value,
            username: user.target.username.value,
            password: user.target.password.value,
        });
        console.log(user.target)
    }

    return (
        <div className={styles.registerUser}>
            <p style={{ color: props.theme.color }}>Register new user</p>
            <form name="form" onSubmit={register}>

                <div >
                    <label htmlFor="firstname" style={{ color: props.theme.color }}>First Name:</label>
                    <input type="text" name="firstname" />

                </div>
                <div>
                    <label htmlFor="lastname" style={{ color: props.theme.color }}>Last Name:</label>
                    <input type="text" name="lastname" />
                </div>
                <div>
                    <label htmlFor="username" style={{ color: props.theme.color }}>Username:</label>
                    <input type="text" name="username" />
                </div>
                <div>
                    <label htmlFor="password" style={{ color: props.theme.color }}>Password:</label>
                    <input type="password" name="password" />
                </div>
                <div >
                    <button type="submit" >Register</button>
                    <button ><Link to="/login" >Cancel</Link></button>
                </div>
            </form>
        </div >
    )
}

export default RegistertUser;

