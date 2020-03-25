import React, { Component } from 'react';
import styles from './navbar.module.css'

class Navbar extends Component {
    render() {
        return (
            <div style={{ background: this.props.theme.background }} className={styles.navbar}>
                <ul>
                    <li style={{ color: this.props.theme.color }}>Login</li>
                    <li style={{ color: this.props.theme.color }}>Setting</li>
                    <li style={{ color: this.props.theme.color }}>Messages</li>
                    <li style={{ color: this.props.theme.color }}>Search</li>
                    <li style={{ color: this.props.theme.color }}>Lorem</li>
                </ul>
            </div>
        );
    }
}

export default Navbar;