import React from 'react';
import styles from './navbar.module.css'
import { NavLink } from 'react-router-dom'


const Navbar = (props) => {

    return (
        <div style={{ background: props.theme.background }} className={styles.navbar}>
            <nav>
                <NavLink to="/login" style={{ color: props.theme.color }}>Login</NavLink>
                <NavLink to="/settings" style={{ color: props.theme.color }}>Setting</NavLink>
                <NavLink to="/register" style={{ color: props.theme.color }}>Register</NavLink>
            </nav>
        </div>
    );
}

export default Navbar;