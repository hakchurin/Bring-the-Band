



import React from 'react';
import { Link } from 'react-router';
import SearchMainPage from './searchMainPage';
import store from './store';




const Nav = React.createClass({
  getInitialState: function () {
    return {session: store.session.toJSON()}
  },
  updateState: function() {
    this.setState({session: store.session.toJSON()});
  },

  componentDidMount: function() {
    store.session.on('update change', this.updateState);
  },

  componentWillUnmount: function () {
    store.session.off('update change', this.updateState);
  },



  render: function () {


    let searchView;
    if (this.props.location === '/searchMainPage') {
      searchView = <searchMainPage navsearch={true} />
    }

    let navigationView;

    if (!store.session.get('username')) {
      navigationView = (
        <nav>
          {searchView}
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </nav>
      )

  }

    return (
      <div>
        {navigationView}
      </div>
    )
  }
})

export default Nav;
