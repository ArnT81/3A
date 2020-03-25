import React, { Component } from 'react';
import styles from './sidebar.module.css'

class Sidebar extends Component {

    constructor(props){
        super(props)
    }
    
    render() {
        return (
            <div style={{background: this.props.theme.background}} className={styles.sidebar}>
                <p style={{ color: this.props.theme.color }}>Sidebar component</p>
            </div>
        );
    }
}

export default Sidebar;