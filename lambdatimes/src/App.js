import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import LoginPage from './components/Login/LoginPage';
import Content from './components/Content/Content';
import authenticate from './components/authenticate/authenticate';

const App = () => {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <LoggedInView />
    </div>
  );
}

const LoggedInView = authenticate(Content)(LoginPage);

export default App;
