import React, { Component } from 'react';
import styles from './settings.module.css'
import Wrapper from '../wrapper/Wrapper';

class Settings extends Component {
    render() {
        return (
            <Wrapper>
                <div className={styles.settings}>
                    <p>Themes</p>
                    <button>Themes</button>
                    <p>Toggle fontsize</p>
                    <button>Fontsize</button>
                    <p>change background image</p>
                    <button>Background image</button>
                </div>
            </Wrapper>
        );
    }
}

export default Settings;