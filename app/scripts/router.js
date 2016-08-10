import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import Login from './collections/login';
import SignUp from './collections/signUp';
import SearchBar from './SearchBar';
import SearchMainPage from './searchMainPage';
import Votes from './votePage';
// import Session from './session';

// import Nav from './nav';




  const router = (
    <Router history ={hashHistory}>
      <Route path = "/" component = {Login}/>
      <Route path = "/login" component = {Login}/>
      <Route path = "/signUp" component = {SignUp}/>
      <Route path = "/searchMainPage" component = {SearchMainPage}/>
      <Route path = "/SearchBar" component = {SearchBar}/>
      <Route path = "/votePage" component = {Votes}/>


    </Router>

  )

export default router;
