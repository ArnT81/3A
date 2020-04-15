import React, { useContext } from 'react';
import { ThemeContext } from '../themeContext/ThemeContext';
import styles from '../background/background.module.css';

import image1 from '../../media/oceandawn.jpg';
import image2 from '../../media/snowymountain.jpg';
import image3 from '../../media/balconies.jpg';

const BackgroundComponent = () => {
    const store = useContext(ThemeContext)

    const handleBackground1 = (e) => {
        e.preventDefault()
        store.background.set(image1)
    }

    const handleBackground2 = (e) => {
        e.preventDefault()
        store.background.set(image2)
    }

    const handleBackground3 = (e) => {
        e.preventDefault()
        store.background.set(image3)
    }

    return (
        <div className={styles.backgroundComponent}>
            <h2>Pictures</h2>
            <img src={image1} width="100px" onClick={handleBackground1}></img>
            <img src={image2} width="100px" onClick={handleBackground2}></img>
            <img src={image3} width="100px" onClick={handleBackground3}></img>
        </div>
    )
}

export default BackgroundComponent;