import React from 'react';

import Navigation from './Components/Navigation/Navigation.jsx';
import Search from './Components/Search/Search';
import CardEvent from './Components/CardEvent/CardEvent';
import Footer from './Components/Footer/Footer';

import './App.css';
import SignIn from './Components/SignIn/SignIn.jsx';
import LogIn from './Components/LogIn/LogIn.jsx';
function App() {
  return (
    <div className="App">
        <Navigation/>
        <LogIn/>
        <Search/>
        <SignIn/>
        <CardEvent/>
        {/*<Map/> */}
        <Footer/>
  
    </div>
  );
}

export default App;