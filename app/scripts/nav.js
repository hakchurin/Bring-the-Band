



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
    <input type= "button" id= "logoutBtn" value="Logout" onClick={this.logout}/>
    <Link to="/votePage">Top Bands </Link>
    <Link to ="/searchMainPage"> Search Bands </Link>
    </div>
  );

} else {
  navLink= (
  <div className= "linkChange">
  <Link to="/votePage">Top Bands </Link>
  <Link to = '/login'> Login</Link>
  </div>
);
}


    return (
      <div>
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
