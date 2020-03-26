import React, { Component } from 'react';
import styles from './navbar.module.css'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

const Navbar = (props) => {

    return (
        <div style={{ background: props.theme.background }} className={styles.navbar}>
            <Router>
                <Link to="/login" style={{ color: props.theme.color }}>Login</Link>
                <Link to="/settings" style={{ color: props.theme.color }}>Setting</Link>
                <Link to="/message" style={{ color: props.theme.color }}>Messages</Link>
                <Link to="/search" style={{ color: props.theme.color }}>Search</Link>
                <Link style={{ color: props.theme.color }}>Lorem</Link>
            </Router>
        </div>
    );

}

export default Navbar;