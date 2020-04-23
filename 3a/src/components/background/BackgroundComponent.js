import React, { useContext } from 'react';
import { ThemeContext } from '../themeContext/ThemeContext';
import Wrapper from '../wrapper/Wrapper'
import image1 from '../../media/oceandawn.jpg';
import image2 from '../../media/snowymountain.jpg';
import image3 from '../../media/balconies.jpg';
import styles from '../background/background.module.css';

/**
 * Imports and provides the pictures used as backgrounds and 
 * contains the logic for changing background.
 * displays smaller versions of the pictures for selection
 */

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
        <Wrapper>
            <div className={styles.backgroundComponent}>
                <h3>Pictures</h3>
                <img src={image1} width="160px" onClick={handleBackground1} alt="Background"></img>
                <img src={image2} width="160px" onClick={handleBackground2} alt="Background"></img>
                <img src={image3} width="160px" onClick={handleBackground3} alt="Background"></img>
            </div>
        </Wrapper>
    )
}

export default BackgroundComponent;