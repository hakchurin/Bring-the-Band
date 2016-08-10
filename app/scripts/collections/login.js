import React from 'react';
import ReactDOM from 'react-dom';
import {router, Route, hashHistory} from 'react-router';
import $ from 'jquery';
import Backbone from 'backbone';
import session from '../session';






const Login = React.createClass ({

  loginFunction:function(e){
    e.preventDefault();
    let username= this.refs.username.value;
    let password= this.refs.password.value;

    let data = {
      username: username,
      password: password
    };
    hashHistory.push(`/SearchMainPage`);

  },
  render: function(){
    return(
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
        </form>
      )
  },
});
export default Login;








// const Login = React.createClass({
//
//   tagName: 'div',
//   className: 'loginForm',
//   events: {
//     'click #loginBtn': 'loginFunction',
//   },
//   loginFunction: function (e){
//     e.preventDefault();
//     let username = this.$('#username').val();
//     let password = this.$('#password').val();
//     session.login(usernmae,password);
//     router.navigate('searchPage', {trigger:true});
//   },
//
//   template: function(){
//     return `
//     <h2> Login </h2>
//     <input type= "text" id="username" name="username" placeholder="username">
//     <input type= "text" id="password" name="password" placeholder="password">
//     <button id="loginBtn"> Submit </button>
//     `;
//   },
//   render function (){
//     this.$el.html(this.template());
//     return this;
//   },
//
// });
// export default Login;
//
