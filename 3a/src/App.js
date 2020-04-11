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
import image from './media/oceandawn.jpg';
import Message from './components/ChatAppliaction/Chat'
import MessageBox from './components/ChatAppliaction/MessageBox';
import { red } from '@material-ui/core/colors';

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

  /*  if (!user) {
     return (
       <ThemeContext.Provider>
         <div>
           <Login setUser={setUser} />
           {<img src={image} alt="ocean at dawn" className="backgroundImg" />}
         </div>
       </ThemeContext.Provider>
     )
   } */
  return (
    <ThemeContext.Provider value={store}>
      {/* {<img src={image} alt="ocean at dawn" />} */}
      <div>
        
        <Router>
          <Navbar />
          <Sidebar>
            <Contacts />
          </Sidebar>
          <Main>
            <Switch>
              <Route path="/" exact render={props => <Login {...props} />} />
              <Route path="/login" render={props => <Login {...props} />} />
              <Route path="/register" render={props => <RegisterUser {...props} />} />
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
