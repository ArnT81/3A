import React, { Component } from 'react';
import styles from './sidebar.module.css'

class Sidebar extends Component {

    constructor(props){
        super(props)
        console.log(props)
    }
    
    render() {
        return (
            <div style={{background: this.props.theme.background}} className={styles.sidebar}>
                <p>Sidebar component</p>
            </div>
        );
    }
}

export default Sidebar;