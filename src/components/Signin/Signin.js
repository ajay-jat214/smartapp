import React from 'react';

class Signin extends React.Component {
  constructor(props){
    super(props);
    this.state={
      signInEmail:'',
      signInPassword:''
    }
  }

  onEmailChange=(event)=>{
    this.setState({signInEmail:event.target.value})
  }

  onPasswordChange=(event)=>{
    this.setState({signInPassword:event.target.value})
  }

  onButtonSubmit=(response)=>{

    fetch('http://localhost:3001/signin',{
      method:'post',
      headers:{Authentication:'Content-Type:application/json'},
      body:JSON.stringify({
              email:this.state.signInEmail,
              password:this.state.signInPassword
              })
    })
    .then(response=>response.json())
    .then(data=>{
      if(data==='success'){
        this.props.onRouteChange('home');

      }
      else{
        console.log(data);
      }
    })
    

  }


 
  render(){



    return(



       <article className="br2 ba dark-gray b--black-10 mv8 w-100 w-50-m w-25-l mw10 center shadow-5">
       <main className="pa4 black-80">
    <div className="measure center">
      <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        <legend  className="f4 fw6 ph0 mh0">Sign In</legend>
  
  
        <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
          <input 
          className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
          type="email" 
          name="email-address"  
          id="email-address" 
          onChange={this.onEmailChange}
          />
        </div>
        <div className="mv3">
          <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
          <input 
          className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
          type="password" 
          name="password"  
          id="password"
          onChange={this.onPasswordChange}
           />
          
        </div>
  
      </fieldset>
      <div className="">
        <input 
        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib pointer" 
        type="submit" 
        value="Sign in" 
        onClick={this.onButtonSubmit}
        />
      </div>
      <div>


      <icons />



      </div>
      <div className="lh-copy mt3">
        <p onClick={()=>this.props.onRouteChange('Registers')} className="f6 link dim black db pointer">Register</p>
  
      </div>
    </div>

  </main>
  </article>
       );
  
  }
 }

 export default Signin;