import React from 'react';
import ReactDOM from 'react-dom';
import {router, Route, hashHistory} from 'react-router';



const SignUp = React.createClass({
  submitFunction:function(e){
    e.preventDefault();
    let name= this.refs.name.value;
    let username= this.refs.username.value;
    let email= this.refs.email.value;
    let data= {
      name:name,
      username:username,
      email:email
    };
    hashHistory.push(`/SearchBar`);

  },
  render:function(){
    return(

      <form onSubmit= {this.submitFunction}>
      <h2> Sign Up </h2>
      <p>
      <input type="text" placeholder="name" ref="name"/>
      </p>
      <p>
      <input type="usernmae" placeholder="username" ref="username"/>
      </p>
      <p>
      <input type="email" placeholder="email" ref="email"/>
      </p>
      <p>
      <input type="submit" placeholder="submit" value="submit"/>
      </p>

      </form>
    )
  }
})

export default SignUp;
