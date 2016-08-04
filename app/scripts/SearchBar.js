import React from 'react';
import ReactDOM from 'react-dom';
import {router, Route, hashHistory} from 'react-router';
// import SeachPageband from './searchPageBands';
import store from './store';


const SearchBar = React.createClass({


  clickHandler: function(){
  let bandSearch=  this.refs.search.value;
    store.SearchPageBand.search(bandSearch);

  },

  render:function(){


      return (
        <div id= "bandSearch">
        <input onClick ={this.clickHandler} type="submit" id="submit" value="submit"/>
        <input type="search" placeholder="search" ref="search"/>

        </div>
    )
  }


});

export default SearchBar;



// make a store
//put instance of search collection on store
//in comp import store
//listen to the store for changees
//set state when store changes
