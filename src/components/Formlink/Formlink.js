import React from 'react';
import './Formlink.css';

 const Formlink=({onInputChange,onButtonSubmit})=>{
 	return(
 		<div className='f3'>
 			<p >{"This magic skull will detect your face"}</p>
            <div  className='Form pa4 br3 center w-50  shadow-5'>
            <input className='f4 pa2 w-50 center ' type='text' onChange={onInputChange}/>
            <button className="pa2 grow link w-20 white bg-purple pointer" onClick={onButtonSubmit}>Detect</button>
            </div>

 		</div>
          
 		);
 }

 export default Formlink;