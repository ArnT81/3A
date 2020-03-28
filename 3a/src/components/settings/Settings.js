import React from 'react';
import styles from './settings.module.css'
import Wrapper from '../wrapper/Wrapper';

const Settings = (props) => {
    

    return (
        <Wrapper>
            <div className={styles.settings}>
                <h3 style={{color: props.theme.color}}>Change themes</h3>
                <button style={{ color: props.theme.color }}>Themes</button>
                <button style={{ color: props.theme.color }}>Fontsize</button>
                <button style={{ color: props.theme.color }}>Background image</button>
            </div>
        </Wrapper>
    );

}

export default Settings;