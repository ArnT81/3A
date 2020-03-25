import React from 'react';
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import Main from './components/main/Main'
import Login from './components/login/Login'
import Wrapper from './components/wrapper/Wrapper'
import image from './media/oceandawn.jpg'

function App() {

  const theme = {
    color: "white",
    background: "rgba(0,0,0,0.8)",
    fontFamily: "Arial",
    fontSize: "20px"
  }

  return (
    <div>
      <img src={image} alt="ocean at dawn" />
      <Navbar theme={theme} />
      <Sidebar theme={theme} />
      <Main />
      <Wrapper theme={theme}>
        <Login theme={theme} />
      </Wrapper>
    </div>
  );
}

export default App;
