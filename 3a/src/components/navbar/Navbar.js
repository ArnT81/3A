import React from 'react';
import styles from './navbar.module.css'
import { Link } from 'react-router-dom'



const Navbar = (props) => {

    return (
        <div style={{ background: props.theme.background }} className={styles.navbar}>
            <nav>
                <ul>
                    <li>
                        <Link to="/login" style={{ color: props.theme.color }}>Login</Link>
                    </li>
                    <li>
                        <Link to="/settings" style={{ color: props.theme.color }}>Setting</Link>
                    </li>
                    <li>
                        <Link to="/register" style={{ color: props.theme.color }}>Register</Link>
                    </li>
                    <li>
                        <Link to="/search" style={{ color: props.theme.color }}>Search</Link>
                    </li>
                    <li>
                        <Link style={{ color: props.theme.color }}>Lorem</Link>
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