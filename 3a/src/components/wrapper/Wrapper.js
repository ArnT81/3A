import React, { Component } from 'react';
import styles from './wrapper.module.css'

class Wrapper extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className={styles.wrapper}>
                {this.props.children}
                <hr className={styles.wrapper} />
            </div>
        );
    }
}

export default Wrapper;