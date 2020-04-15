import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeContext } from './components/themeContext/ThemeContext';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';
import Login from './components/login/Login';
import RegisterUser from './components/registerUser/RegisterUser';
import Settings from './components/settings/Settings';
import Contacts from '../src/components/Contacts/Contacts';
import Message from './components/ChatAppliaction/Chat'
import image1 from './media/oceandawn.jpg';
import BackgroundComponent from './components/background/BackgroundComponent';

const App = () => {
  const [user, setUser] = useState(false);
  const [profilePicture, setProfilePicture] = useState(localStorage.profilePicture);
  const [theme, setTheme] = useState('rgba(0,0,0,0.8)');
  const [mainTheme, setMainTheme] = useState('rgba(0,0,0,0.6)');
  const [background, setBackground] = useState(image1)
  const [color, setColor] = useState('white');
  const [fontSize, setFontSize] = useState('medium');


  const store = {
    user: { get: user, set: setUser },
    profilePicture: { get: profilePicture, set: setProfilePicture },
    theme: { get: theme, set: setTheme },
    mainTheme: { get: mainTheme, set: setMainTheme },
    background: { get: background, set: setBackground },
    color: { get: color, set: setColor },
    fontSize: { get: fontSize, set: setFontSize }
  };

  /*  if (!user) {
     return (
       <ThemeContext.Provider value={store}>
         <div>
           <Login />
           {<img src={image} alt="ocean at dawn" className="backgroundImg" />}
         </div>
       </ThemeContext.Provider>
     )
   } */
  return (
    <ThemeContext.Provider value={store}>
      {<img src={store.background.get} alt="ocean at dawn" />}
      <div className="container">
        <Router>
          <Navbar />
          <Sidebar>
            <Contacts />
          </Sidebar>
          <Main>
            <Switch>
              <Route path="/" exact render={props => <Message {...props} />} />
              <Route path="/login" render={props => <Login {...props} />} />
              <Route path="/background" render={props => <BackgroundComponent {...props} />} />
              <Route path="/settings" render={props => <Settings {...props} />} />
              <Route path="/message" render={props => <Message {...props} />} />
            </Switch>
            {/* <MessageBox /> */}
          </Main>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
