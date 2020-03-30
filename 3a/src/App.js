import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import Main from './components/main/Main'
import Login from './components/login/Login'
import image from './media/oceandawn.jpg'
import RegisterUser from './components/registerUser/RegisterUser'
import Settings from './components/settings/Settings'

const App = () => {

  const [user, newState] = useState(false)

  const theme = {
    color: "white",
    background: "rgba(0,0,0,0.8)",
    fontFamily: "Arial",
    fontSize: "20px"
  }

  if (!user) {
    return (
      <div>
        <Login theme={theme} newState={newState} />
        {<img src={image} alt="ocean at dawn" className="backgroundImg" />}
      </div>
    )
  }
  return (
    <div>
      {<img src={image} alt="ocean at dawn" />}
      <Router>
        <Navbar theme={theme} />
        <Sidebar theme={theme} />
        <Switch>
          <Main>
            <Route path="/" exact render={props => <Login theme={theme} {...props} />} />
            <Route path="/login" render={props => <Login theme={theme} {...props} />} />
            <Route path="/register" render={props => <RegisterUser theme={theme} {...props} />} />
            <Route path="/settings" render={props => <Settings theme={theme} {...props} />} />
          </Main>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
