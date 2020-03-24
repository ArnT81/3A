import React, { Component } from 'react';
import styles from './sidebar.module.css'

class Sidebar extends Component {

    render() {
        return (
            <div>
                <p className={styles.para}>Sidebar component works</p>
            </div>
        );
    }
}

export default Sidebar;