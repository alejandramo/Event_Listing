import React from 'react';
import './Navigation.css';
import LogoBeAt from './LogoBeAt.png';
import Tilt from 'react-tilt'

const Navigation =() => {
    return (
        <div className='nav_container'>
          <header>
            <ul>
              <li>
                  <a className="active" href="#home">
                    <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 150, width: 350 }} >
                      <div className="Tilt-inner"><img src={LogoBeAt} alt="Logo_Home" /></div>
                    </Tilt>
                  </a>
                </li>            
              <li style={{float: 'right'}}><a href="mapa.html">Mapa</a></li>
            </ul>              
          </header>   
        </div>
    )
}


export default Navigation;