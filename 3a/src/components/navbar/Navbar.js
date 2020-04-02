import React, { Fragment } from 'react';
import styles from './navbar.module.css'
import { NavLink } from 'react-router-dom'



const Navbar = (props) => {

    return (
        <div style={{ background: props.theme.background }} className={styles.navbar}>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/login" style={{ color: props.theme.color }}>Login</NavLink>
                    </li>
                    <li>
                        <NavLink to="/settings" style={{ color: props.theme.color }}>Setting</NavLink>
                    </li>
                    <li>
                        <NavLink to="/register" style={{ color: props.theme.color }}>Register</NavLink>
                    </li>
                    <li>
                        <NavLink to="/search" style={{ color: props.theme.color }}>Search</NavLink>
                    </li>
                    <li>
                        <NavLink style={{ color: props.theme.color }}>Lorem</NavLink>
                    </li>
                </ul>
            </nav>
            <div>
                <img src={localStorage.picture} width="70px" height="70px" className={styles.profilePicture} />
            </div>
        </div>
    );
}

export default Navbar;