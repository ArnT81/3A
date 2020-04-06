import React, { useContext } from 'react';
import { ThemeContext } from '../themeContext/ThemeContext';
import Wrapper from '../wrapper/Wrapper';
import InputColor from 'react-input-color';
import styles from './settings.module.css';


const Settings = () => {
  const store = useContext(ThemeContext);
  const [color, setColor] = React.useState({});////
  console.log(store)

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
      reader.readAsDataURL(file);
    });
  }

  const imageUpload = (e) => {
    const file = e.target.files[0];
    getBase64(file).then(base64 => {
      localStorage["profilePicture"] = base64
      store.profilePicture.set({ profilePicture: localStorage.profilePicture })
    });
  };

  const handleClick = () => {
    store.theme.set(color.rgba);
  } //////

  return (
    <Wrapper>
      <div className={styles.settings} style={{ color: store.color.get }}>
        <div className={styles.pictureFrame}>
          <p style={{ textAlign: 'center' }}>Change profile picture</p><br />
          <img src={localStorage.profilePicture} ></img><br />

          <input
            type="file"
            id="profilePicture"
            name='profilePicture'
            onChange={imageUpload} />
        </div>
        <div className={styles.colorFrame}>
          <p>Change theme color</p>
          <InputColor
            initialValue="#5e72e4"
            onChange={setColor}
            placement="top"
          />
          <button onClick={handleClick}>Change Theme</button>
        </div>

                Change username
                Change Password

        </div>
      <div className={styles.settings} style={{ color: store.color.get }}>
        <h3>Change themes</h3>
        <button>Fontsize</button>
        <button>Background image</button>
      </div>
    </Wrapper>
  );

}


export default Settings;