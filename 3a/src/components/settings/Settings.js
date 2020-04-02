import React, { Component } from 'react';
import Wrapper from '../wrapper/Wrapper';
import styles from './settings.module.css';

class Settings extends Component {

  constructor(props) {
    super(props)
    this.state = { picture: null }
  }

  getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
      reader.readAsDataURL(file);
    });
  }

  imageUpload = (e) => {
    const file = e.target.files[0];
    this.getBase64(file).then(base64 => {
      localStorage["picture"] = base64
      this.setState({ picture: localStorage.picture })
    });
  };

  render() {
    return (
      <Wrapper>
        <div className={styles.settings}>
          <div className={styles.pictureFrame}>
          <p style={{textAlign: 'center' }}>Ladda upp profilbild</p>
            <img src={localStorage.picture} width="100px" height="100px"></img>
            
            <input
              type="file"
              id="profilePicture"
              name='profilePicture'
              onChange={this.imageUpload} />
          </div>

                Change picture
                Change username
                Change Password

        </div>
        <div className={styles.settings}>
          <h3 style={{ color: this.props.theme.color }}>Change themes</h3>
          <button style={{ color: this.props.theme.color }}>Themes</button>
          <button style={{ color: this.props.theme.color }}>Fontsize</button>
          <button style={{ color: this.props.theme.color }}>Background image</button>
        </div>
      </Wrapper>
    );

  }
}
export default Settings;