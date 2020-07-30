import React from 'react';
import Navigation from './Navigation.css';

const Navigation1 = ({onRouteChange,isSignedIn}) => {
	if(isSignedIn){
	return(
		<html>
		<nav style={{display:'flex' ,justifyContent:'flex-end'}}>
	       <div id="parent"><i class="material-icons logout" onClick={()=>onRouteChange('Signouts')} className='f3 dim black underline pa3 pointer grow'>
           <div class="spider">
           <div class="spiderweb"></div>
           <div class="body">
           <div class="eye left"></div>
           <div class="eye right"></div>
           
           <div class="legs left">
           <div class="leg"></div>
           <div class="leg"></div>
           <div class="leg"></div>
           </div>

           <div class="legs right">
           <div class="leg"></div>
           <div class="leg"></div>
           <div class="leg"></div>
           </div>


           </div>
           </div>
           </i>

	       </div>
	    </nav>
	    </html>
		);
	}else{
	    return(
		<nav style={{display:'flex' ,justifyContent:'flex-end'}}>
	    <p onClick={()=>onRouteChange('Signins')} className='f3 dim black underline pa3 pointer grow'>Sign In</p>
	    <p onClick={()=>onRouteChange('Registers')} className='f3 dim black underline pa3 pointer grow'>Register</p>
	    </nav>
		);

	}
}
export default Navigation1 ;