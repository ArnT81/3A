import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom'
import { ThemeContext } from '../themeContext/ThemeContext';
import { Link } from 'react-router-dom';
import logo from '../../../src/media/logo512.png';
import styles from './navbar.module.css';

/**
 * Navbar is the component on the top of the app (above main content window and sidebar).
 * Contains the logo, links to logut and contacts, and displays the profilepicture.
 * There is also a "hamburger-menu" visible only in mobile display format.
 */

const Navbar = (props) => {
    const store = useContext(ThemeContext);
    const history = useHistory();

    const logoutFunc = () => {
        store.user.set(false)
    }

    const showContacts = () => {
        history.push("/contacts")
    }

    return (
        <div className={styles.navbar} style={{ background: store.theme.get, color: store.color.get }}>
            <nav>
                <div><nav role="navigation">
                    <div id="menuToggle">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        {<ul id="menu">
                            <li onClick={showContacts}>
                                <Link to="/contacts">Contacts</Link>
                            </li>
                            <li>
                                <Link to="/settings">Setting</Link>
                            </li>
                            <li>
                                <Link onClick={logoutFunc} to="/login" style={{ color: store.color.get }}>Logout</Link>
                            </li>
                        </ul>}
                    </div>
                </nav></div>
                <div>
                    <img src={logo} className={styles.logo} alt="Logo" />
                </div>
                <ul>
                    <li>
                        <Link to="/settings" style={{ color: store.color.get }}>Setting</Link>
                    </li>
                    <li>
                        <Link onClick={logoutFunc} to="/login" className={styles.logout}>Logout</Link>
                    </li>
                </ul>
            </nav>
            <div>
                <img src={localStorage.profilePicture} width="70px" height="70px" className={styles.profilePicture} alt="Profile" />
            </div>
        </div>
    );
}

export default Navbar;