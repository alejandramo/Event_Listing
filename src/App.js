import React from 'react';

import Navigation from './Components/Navigation/Navigation.jsx';
import Search from './Components/Search/Search';
import CardEvent from './Components/CardEvent/CardEvent';
import Footer from './Components/Footer/Footer';

import './App.css';
function App() {
  return (
    <div className="App">
        <Navigation/>
        <Search/>
        <CardEvent/>
        {/*<Map/> */}
        <Footer/>
  
    </div>
  );
}

export default App;
