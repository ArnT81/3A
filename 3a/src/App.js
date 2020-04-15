import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeContext } from './components/themeContext/ThemeContext';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';
import LoginComponent from './components/login/LoginComponent';
import RegisterUser from './components/registerUser/RegisterUser';
import Settings from './components/settings/Settings';
import Contacts from '../src/components/Contacts/Contacts';
import image from './media/oceandawn.jpg';
import Message from './components/ChatAppliaction/Chat';


const App = () => {
  const [user, setUser] = useState(false);
  const [profilePicture, setProfilePicture] = useState(localStorage.profilePicture);
  const [theme, setTheme] = useState('rgba(0,0,0,0.8)');
  const [color, setColor] = useState('white');
  const [fontSize, setFontSize] = useState('medium');

  const store = {
    user: { get: user, set: setUser },
    profilePicture: { get: profilePicture, set: setProfilePicture },
    theme: { get: theme, set: setTheme },
    color: { get: color, set: setColor },
    fontSize: { get: fontSize, set: setFontSize }
  };

  return (
    <ThemeContext.Provider value={store}>
      {<img src={image} alt="ocean at dawn" />}
      <div className="container">
        <Router>
          {user ? <> <Navbar />
            <Sidebar>
              <Contacts />
            </Sidebar> </> : null}
          <Switch>
            {!user ?
              <>
                <Route path="/" exact render={props => <LoginComponent {...props} />} />
                <Route path="/login" render={props => <LoginComponent {...props} />} />
                <Route path="/register" render={props => <RegisterUser {...props} />} />
              </> :
              <Main>
                <Route path="/settings" render={props => <Settings {...props} />} />
                <Route path="/message" render={props => <Message {...props} />} />
              </Main>
            }

          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
