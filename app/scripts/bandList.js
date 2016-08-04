

import React from 'react';
import ReactDOM from 'react-dom';
import {router, Route, hashHistory} from 'react-router';
import store from './store';
import SearchMainPage from './searchMainPage';








const BandList = React.createClass({
getInitialState: function(){
  return{bands:store.SearchPageBand.get('bandName')}
},
componentDidMount: function(){
  store.SearchPageBand.on('update', this.searched);
},

  render: function(){
  //   if list;
  //   if this.props.bandName){
  // list= <SearchMainPage bandName={this.state.bands} />


    return(

      <li>
   {this.props.bandName}
      </li>
    )

}
});
export default BandList;
