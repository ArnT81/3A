import React, { Component } from 'react';
import styles from './wrapper.module.css'

class Wrapper extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div style={{ background: this.props.theme.background }} className={styles.wrapper}>
                <p className={styles.para} >Wrapper component</p>
                <hr className={styles.wrapperhr} />
                {this.props.children}
            </div>
        );
    }
}

export default Wrapper;