import React, { Component } from 'react';
import styles from './wrapper.module.css'

/**
 * Just a container with graphic properties used for the
 * components in the app.  
 */

class Wrapper extends Component {

    render() {
        return (
            <div className={styles.wrapper}>
                {this.props.children}
            </div>
        );
    }
}

export default Wrapper;