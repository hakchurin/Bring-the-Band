

import React from 'react';
import ReactDOM from 'react-dom';
import {router, Route, hashHistory} from 'react-router';
import store from './store';
import SearchMainPage from './searchMainPage';
import SearchPageBand from './collections/searchPageBands';
import ListOfBand from './ListOfBand';
// import Votes from './votePage';






const BandList = React.createClass({
getInitialState: function(){
  return{votes: this.props.vote}
},
componentDidMount: function(){
  store.SearchPageBand.on('update', this.searched);
},
clickHandler: function (){
  this.setState({votes:this.props.vote +1})
  store.voteCollection.addVoteFunction(this.props.band, this.props.imgURL);

},

  render: function(){

    return(

      <li>
      <img src={this.props.imgURL} />
      <p id="bandName">{this.props.band} <button onClick= {this.clickHandler}> <i className="fa fa-thumbs-o-up" aria-hidden="true"></i></button></p>

      </li>
    )

}
});
export default BandList;
