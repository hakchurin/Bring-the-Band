import React from 'react';
import ReactDOM from 'react-dom';
import {router, Route, hashHistory} from 'react-router';
import store from './store';
import Nav from './nav';

const SearchBar = React.createClass({


  clickHandler: function(){
  let bandSearch=  this.refs.search.value;
    store.SearchPageBand.search(bandSearch);

  },

  render:function(){


      return (
        <div id= "bandSearch">

        <img src='/assets/btbBlack.svg' alt="btb" id="btb"/>


        <input type="search" placeholder="Search Band" ref="search"/>
        <input onClick ={this.clickHandler} type="submit" id="submit" value="Search"/>
        <Nav />
        </div>
    )
  }

});

export default SearchBar;


// <url: '../assets/images/hamburgar.svg'/>


// make a store
//put instance of search collection on store
//in comp import store
//listen to the store for changees
//set state when store changes
