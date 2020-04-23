import React, { useContext } from 'react';
import { ThemeContext } from '../themeContext/ThemeContext';
import styles from './main.module.css'

/**
 * Main-content window that contain the componenents that opens in the 
 * app and effects their position.
 */

const Main = (props) => {
    const store = useContext(ThemeContext)
    
    return (
        <div className={styles.main} style={{background: store.mainTheme.get}}>
            {props.children}
        </div>
    );
}

export default Main;