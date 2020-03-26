import React, { Component } from 'react';
import styles from './sidebar.module.css'


const Sidebar = (props) => {

    return (
        <div style={{ background: props.theme.background }} className={styles.sidebar}>
            <p>Sidebar component</p>
        </div>
    );
}


export default Sidebar;