import React, { Component } from 'react';
import styles from './sidebar.module.css'

const Sidebar = (props) => {

    return (
        <div style={{ background: props.theme.background }} className={styles.sidebar}>
            <p style={{ color: this.props.theme.color }}>Sidebar component</p>
        </div>
    );
}

export default Sidebar;