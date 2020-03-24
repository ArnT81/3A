import React from 'react';
import Sidebar from './components/sidebar/Sidebar'
import Login from './components/login/Login'
import Wrapper from './components/wrapper/Wrapper'

function App() {
  
  const theme = {
    color: "white",
    background: "linear-gradient(100deg, #007bff 30%, white)",
    fontFamily: "Arial",
    fontSize: "20px"
  }

  return (
    <div>
      <h3>3A</h3>
      <Sidebar theme={theme} />

      <Wrapper theme={theme}>
        <Login />
      </Wrapper>
    </div>
  );
}

export default App;
