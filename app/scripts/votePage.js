import React from 'react';
import ReactDOM from 'react-dom';
import {router, Route, hashHistory, Link} from 'react-router';
import store from './store';
import SearchMainPage from './searchMainPage';
import SearchPageBand from './collections/searchPageBands';
import BandList from './bandList';
import voteCollection from './collections/voteCollection';
import SearchBar from './SearchBar';
import Nav from './Nav';


const Votes = React.createClass({
  getInitialState: function(){

    return {
      bands:store.voteCollection.toJSON()
    };
  },

  updateState: function (){
    this.setState({bands: store.voteCollection.toJSON()});
  },

  componentDidMount: function(){
    store.voteCollection.fetch();

    store.voteCollection.on('update change', this.updateState);

  },

componentWillUnmount: function(){
  store.voteCollection.off('update change', this.updateState);
},

  render: function() {
    console.log(votedBands);

    let votedBands = this.state.bands.map((band,i)=>{
        return < BandList band={band.name} vote={band.votes} imgURL={band.img} key={i}  />
    })
    return (
      <ul>
      <Nav/>
      {votedBands}
      </ul>

    )
  }
});
export default Votes;



// {bands: store.SearchPageBand.get('votes')}
