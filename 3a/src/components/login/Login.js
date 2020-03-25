import React, { Component } from 'react';
// import styles from './login.module.css'

class Login extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <p style={{ color: this.props.theme.color }}>Login component works</p>
            </div>
        );
    }
}

export default Login;