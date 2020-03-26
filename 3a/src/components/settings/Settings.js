import React, { Component } from 'react';
import styles from './settings.module.css'

class Settings extends Component {
    render() {
        return (
            <div className={styles.settings}>
                <p>Themes</p>
                <button>Themes</button>
                <p>Toggle fontsize</p>
                <button>Fontsize</button>
                <p>change background image</p>
                <button>Background image</button>
            </div>
        );
    }
}

export default Settings;