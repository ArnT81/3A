import React, { useContext } from 'react';
import { ThemeContext } from '../themeContext/ThemeContext';
import styles from './sidebar.module.css';

/**
 * Graphical component that contains contacts (added encapsuled in App.js)
 */

const Sidebar = (props) => {
    const store = useContext(ThemeContext)

    return (
        <div className={styles.sidebar} style={{ background: store.theme.get }}>
            {props.children}
        </div>
    );
}

export default Sidebar;