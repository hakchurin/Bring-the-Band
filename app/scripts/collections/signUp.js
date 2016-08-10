import React from 'react';
import ReactDOM from 'react-dom';
import {router, Route, hashHistory} from 'react-router';
import store from '../store';
// import session from '../session';


const SignUp = React.createClass({
  getInitialState: function(){
    // return {session:store.session.toJSON()}
    return{};
  },
  updateState: function(){
    // this.setState(store.session.toJSON());
    this.setState(store.session.toJSON());
  },
  componentDidMount: function (){
    // store.session.on('update change', this.updateState);
    store.session.on('change',this.updateState);
    // console.log(session);
  },
  // componentWillMount: function (){
  //   // store.session.off('update change', this.updateState);
  //   store.session.off('change',this.updateState)
  // },


  submitFunction:function(e){
    e.preventDefault();
    let name= this.refs.name.value;
    let username= this.refs.username.value;
    let email= this.refs.email.value;
    let password = this.refs.password.value;

  let data = {
      name:name,
      username:username,
      email:email,
      password:password
      // store.session.signup(data);
    };

    store.session.signup(data);
  },

    // {
    //   url:`https://baas.kinvey.com/user/${settings.appKey}`,
    //   success: function(model,response){
    //     model.unset('password');
    //     window.localStorage.setItem('authtoken', response._kmd.authtoken);
    //     hashHistory.push(`/SearchMainPage`);
    //   },



  render:function(){
    if(this.state.authtoken){
      hashHistory.push('/searchMainPage');
    }

    return(

      <form onSubmit= {this.submitFunction}>
      <h2> Sign Up </h2>
      <p>
      <input type="text" placeholder="name" ref="name"/>
      </p>
      <p>
      <input type="username" placeholder="username" ref="username"/>
      </p>
      <p>
      <input type="password" placeholder="password" ref="password"/>
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
