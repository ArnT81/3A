import React, { useContext } from 'react';
import { ThemeContext } from '../themeContext/ThemeContext'
import { Link } from 'react-router-dom'
import logo from '../../../src/media/logo512.png'
import styles from './navbar.module.css'



const Navbar = (props) => {
    const store = useContext(ThemeContext)

    return (
        <div className={styles.navbar} style={{ background: store.theme.get, color: store.color.get }}>
            <nav>
                <div><nav role="navigation">
                    <div id="menuToggle">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                       { <ul id="menu">
                            <li>
                                <Link to="/message">Message</Link>
                            </li>
                            <li>
                                <Link to="/settings">Setting</Link>
                            </li>
                            <a href="#"><li>Logout</li></a>
                            <a href="#"><li>Contacts</li></a>
                            <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
                        </ul>}
                    </div>
                </nav></div>
                <div>
                    <img src={logo} className={styles.logo} />
                </div>
                <ul>
                    <li>
                        <Link to="/login" style={{ color: store.color.get }}>Login</Link>
                    </li>
                    <li>
                        <Link to="/message" style={{ color: store.color.get }}>Message</Link>
                    </li>
                    <li>
                        <Link to="/settings" style={{ color: store.color.get }}>Setting</Link>
                    </li>
                    <li>
                        <Link to="/register" style={{ color: store.color.get }}>Register</Link>
                    </li>
                    <li>
                        <Link to="/search" style={{ color: store.color.get }}>Empty</Link>
                    </li>
                </ul>
                {/* <NavLink to="/login" style={{ color: props.theme.color }}>Login</NavLink>
                <NavLink to="/settings" style={{ color: props.theme.color }}>Setting</NavLink>
                <NavLink to="/register" style={{ color: props.theme.color }}>Register</NavLink> */}
            </nav>
            <div>
                <img src={localStorage.profilePicture} width="70px" height="70px" className={styles.profilePicture} />
            </div>
        </div>
    );
}

export default Navbar;