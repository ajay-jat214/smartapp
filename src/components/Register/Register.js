import React from 'react';




class Register extends React.Component{


    constructor(props){
    super(props);
    this.state={

      email:'',
      password:'',
      name:''
    }
  }

  onEmailChange=(event)=>{
    this.setState({email:event.target.value})
  }

  onPasswordChange=(event)=>{
    this.setState({password:event.target.value})
  }

    onNameChange=(event)=>{
    this.setState({name:event.target.value})
  }

  onButtonSubmit=(event,response)=>{
    fetch('http://localhost:3001/register',{
      method:'post',
      headers:{Authentication:'Content-Type:application/json'},
      body:JSON.stringify({
              email:this.state.email,
              password:this.state.password,
              name:this.state.name
              })
    })
    .then(response=>response.json())
    .then(user=>{
      if(user.id){

              this.props.loaduser(user);
              this.props.onRouteChange('home');
           }
    })
    

  }



  render(){
     return(
       <article className="br2 ba dark-gray b--black-10 mv8 w-100 w-50-m w-25-l mw10 center shadow-5">
       <main className="pa4 black-80">
    <div className="measure center">
      <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
          <input 
          className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
          type="email" 
          name="email-address"  
          id="email-address"
          onChange={this.onEmailChange} />
        </div>
     
        <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
          <input 
          className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
          type="text" 
          name="name"  
          id="name"
          onChange={this.onNameChange} />
        </div>
        <div className="mv3">
          <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
          <input 
          className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
          type="password" 
          name="password"  
          id="password" 
          onChange={this.onPasswordChange}/>
        </div>
  
      </fieldset>
  
      <div className="lh-copy mt3">
          <input 
          onClick={this.onButtonSubmit}
          className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib pointer" 
          type="submit" 
          value="Sign in" 
  
          />
  
  
      </div>
    </div>
  </main>
  </article>
       );}
 }

 export default Register;