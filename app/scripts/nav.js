import React from 'react';
import ReactDOM from 'react-dom';
import {router, Route, hashHistory} from 'react-router';



const Nav = React.createClass({
  render:function(){
    return (
      <nav className = "nav">
        <ul>
          <li>
          <Link to= "ff"> </Link>
            </li>
          </ul>
      </nav>
    )
  }
});

export default Nav;
