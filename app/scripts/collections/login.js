import React from 'react';
import ReactDOM from 'react-dom';
import {router, Route, hashHistory, Link} from 'react-router';
import $ from 'jquery';
import Backbone from 'backbone';
import store from '../store';





const Login = React.createClass ({

  loginFunction:function(e){
    e.preventDefault();
    let username= this.refs.username.value;
    let password= this.refs.password.value;


    store.session.login(username, password);
    hashHistory.push(`/SearchMainPage`);


  },
  render: function(){
    return(
      <div id="style">

      <div id="video">
      <video  autoPlay muted loop poster="/assets/band.png" id="bgvid">
      <source src="/assets/guitar2_720.webm" type="video/webm" />
      <source src="/assets/guitar2_720.mp4" type="video/mp4" />
      </video>
      </div>

      <form onSubmit ={this.loginFunction} id="loginForm">


      <h2 id="login"> Login </h2>
      <p>
      <input type="text" id="username" placeholder="username" ref="username"/>
      </p>
      <p>
      <input type="password" id="password" placeholder="password" ref="password"/>
      </p>
      <p>
      <input type="submit" id="loginBtn" value="Submit"/>
      </p>
      <p>
      <Link to ='/signUp' id="signUpLink"> Sign Up Here!</Link>
      </p>

      </form>
  </div>




      )
  },
});
export default Login;
