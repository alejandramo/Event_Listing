import React from 'react';
import './Navigation.css';
import './LogoBeAt.png';

const Navigation =() => {
    return (
        <div className='nav_container'>
            <nav class="db dt-l w-100 border-box pa3 ph5-l">
                <a class="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="#" title="Home">
                  <img href="" src="./LogoBeAt.png" class="dib w2 h2 br-100" alt="Logo Be-At"/>
                </a>
                <div class="db dtc-l v-mid w-100 w-75-l tc tr-l">
                  <a class="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="Home">Home</a>
                  <a class="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="How it Works">Map</a>
                </div>
            </nav>

            
        </div>
    )
}



export default Navigation;