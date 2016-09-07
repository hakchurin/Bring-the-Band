



import React from 'react';
import { Link } from 'react-router';
import SearchMainPage from './searchMainPage';
import store from './store';
import Session from './session';



const Nav = React.createClass({
  getInitialState: function () {
return {
    authtoken: localStorage.getItem('authtoken')
  };
},

  updateState: function() {
    this.setState({authtoken: store.session.get('authtoken')});
  },

  logout: function () {
    store.session.logout();
  },


  componentDidMount: function() {
    store.session.on('change', this.updateState);
  },

  componentWillUnmount: function () {
    store.session.off('change', this.updateState);
  },

  render: function () {
  let navLink;
  if (this.state.authtoken){
navLink = (
    <div className="linkChange">
    <Link to="/votePage" id="topBand"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i></Link>
    <Link to ="/searchMainPage" id="search"> <i className="fa fa-search" aria-hidden="true"></i></Link>

     <button id="signOutBtn" onClick= {this.logout} > <i className="fa fa-sign-out" aria-hidden="true"></i></button>




    </div>
  );

} else {
  navLink= (
  <div className= "linkChange">
  <Link to="/votePage" id="topBand"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> </Link>
  <Link to = '/login' id="loginBtn"> <i className ="fa fa-sign-in" aria-hidden="true"></i></Link>
  </div>
);
}


    return (
      <div id="navLink">
      {navLink}
      </div>
    )
  }
});

export default Nav;



// <Link to = 'signUp'> Sign Up </Link>


//
// let searchView;
// if (this.props.location === '/searchMainPage') {
//   searchView = <searchMainPage navsearch={true} />
// }
//
// let navigationView;
//
// if (!store.session.get('username')) {
//   navigationView = (
//     <nav>
//       {searchView}
//       <Link to="/login">Login</Link>
//       <Link to="/signup">Sign Up</Link>
//       <Link to="/Votes">Top Bands </Link>
//
//     </nav>
//   )
//
// }
