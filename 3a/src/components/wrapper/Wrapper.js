import React, { Component } from 'react';
import styles from './wrapper.module.css'

class Wrapper extends Component {

    render() {
        return (
            <div>
                <p className={styles.para} >Wrapper component works</p>
            </div>
        );
    }
}

export default Wrapper;