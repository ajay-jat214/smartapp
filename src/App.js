import React,{Component} from 'react';
import Navigation1 from './components/Navigation/Navigation';
import Clarifai from 'clarifai';
import Facerecognization from './components/Facerecognization/Facerecognization';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Particles from 'react-particles-js';
import Logo from './components/Logo/Logo';
import Formlink from './components/Formlink/Formlink';
import Rank from './components/Rank/Rank';
import './App.css';
import { FaFacebookF } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaWhatsappSquare } from 'react-icons/fa';

const app = new Clarifai.App({
 apiKey: 'af1678003d094dbc93ccd0fdc53b59d4'
});

class App extends Component{

  constructor(){
    super();
    this.state={
      input:'',
      imageUrl:'',
      route:'Signins',
      isSignedIn:false,
      user:{
      id:'',
      name:'',
      email:'',
      entries:'',
      joined:''
      }
    }
  }
loaduser=(data)=>{

  this.setState({user:{
      id:data.id,
      name:data.name,
      email:data.email,
      entries:data.entries,
      joined:data.joined


  }})


}



onInputChange=(event)=>{
  this.setState({input:event.target.value});
}

onRouteChange=(route)=>{
  if(route==='Signouts'){
    this.setState({isSignedIn:false})
  }else if(route==='home'){
    this.setState({isSignedIn:true})
  }
  this.setState({route:route});
}

onButtonSubmit=()=>{
  this.setState({imageUrl:this.state.input});
  app.models.predict(Clarifai.FACE_DETECTION_MODEL, this.state.input)
  .then(response=>this.displayFaceBox(this.calculateFaceLocation(response)))
  .catch(err=>console.log(err))
}

  render()
{
  return (
      <div className="App">
       <Particles className='particles'
         params={
                  {
                particles: {
                      number:{
                      value:250,
                      density:{
                      enable:true,
                      value_area:800
                    }
                    }
                  }
                 ,
                repulse: {
                distance: 200,
                duration: 0.4
                },
       
                onhover: {
                enable: true,
                mode:' repulse'
                },
                  interactivity: {
                events: {
                onhover: {
                enable: true,
                mode: 'repulse'
                  }
                }
              }
           }
         }
              
        />
                <Navigation1 
                isSignedIn={this.state.isSignedIn} 
                onRouteChange={this.onRouteChange}
                />
                  { 
                    this.state.route==='home'
                                    ?<div>
                                    
                                    <Logo />
                                    <Rank 
                                    name=<p>{`${this.state.user.name}`}</p>
                                  
                                    />
                                    
                                    <Formlink 
                                    onInputChange={this.onInputChange} 
                                    onButtonSubmit={this.onButtonSubmit}
                                    />
                                    <Facerecognization 
                                    imageUrl={this.state.imageUrl}
                                    />
                                    

                                    <p className="ajay">*𝖋𝖔𝖑𝖑𝖔𝖜 𝖚𝖘 𝖔𝖓*</p>
                                    
                                    <ul>


                                    <li><a href="#"><a className="fab fa-facebook-f icon" href="https://www.facebook.com/?stype=lo&jlou=AfdSQBdNbbcgG9ecIKpblNf6KLhfulT7AMh-U2AQjZEKRMTySO6lnn6lsFJVi7InJfPHMzDON0YjSL68lb1BfQODXQsuhFWRn3cXtb7lGBGZKA&smuh=64008&lh=Ac-tpZvoALAXFJog"><FaFacebookF color='#3b5998' size='3rem'/></a></a></li>
                                    <li><a href="#"><a className="fab fa-twitter icon" href="https://www.youtube.com/"><FaYoutube color='red' size='3rem'/></a></a></li>
                                    <li><a href="#"><a className="fab fa-linkedin-in icon" href="https://twitter.com/login?lang=en"><FaTwitter color='#00acee' size='3rem'/></a></a></li>
                                    <li><a href="#"><a className="fab fa-facebook-f icon" href="https://web.whatsapp.com/" ><FaWhatsappSquare color='green' size='3rem'/></a></a></li>
                                    

                                    </ul>



                                    </div>
                                    :
                                    (
                                      this.state.route==='Signins'
                                      ? 
                                      <Signin 
                                      onRouteChange={this.onRouteChange} 
                                      /> 
                                      : 
                                      <Register 
                                      loaduser={this.loaduser} 
                                      onRouteChange={this.onRouteChange} 
                                      />

                                     
                                      )
                                   
                                    
                                    
                   }
      </div>
    );
}
  }


export default App;
