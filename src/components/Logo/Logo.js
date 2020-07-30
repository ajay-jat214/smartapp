import React from 'react';
import Tilt from 'react-tilt';
import brain1 from './brain1.png';
import './Logo.css';


const Logo=()=>{

	return(
		<div className="pa4 mt0">
		<Tilt className="Tilt br2 shadow-2 mb4 grow pointer" options={{ max : 25 }} style={{ height: 160, width: 200 }} >
        <div className="Tilt-inner pa4 ma4 h-150 w-500"> <img style={{  height:'100px',width:'100px' }} alt='logo' src={ brain1 } /> </div>
        </Tilt>
        </div>
		);
}

export default Logo;