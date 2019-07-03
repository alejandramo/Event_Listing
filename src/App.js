import React from 'react';

import Navigation from './Components/Navigation/Navigation.jsx';

//MAP



//import Footer from './Components/Footer/Footer';
import CategoriasProvider from './Components/Categories/Categories';
import EventosProvider from './Components/Events/Events';
import ListaEventos from './Components/ListaEventos/ListaEventos';
import Formulario from './Components/Form/Form';

import Footer from './Components/Footer/Footer';

import './App.css';



function App() {
  return (
    <div className="App">
        <EventosProvider>
          <CategoriasProvider>
            <Navigation/>
            <div className='uk-container'>
              <Formulario/>
              <ListaEventos/>
            </div>
            <div style={{width: '100vw', height:'100vh'}}>

            </div>
          </CategoriasProvider>
          </EventosProvider>
        
        <Footer/>
  
    </div>
  );
}

export default App;
