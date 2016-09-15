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



    let testVotedBands;
    let votedBands = this.state.bands.map((band,i)=>{
      // console.log(band);
      console.log(store.session.get('username'));
      console.log(band.voters);
      console.log(band.voters.indexOf(store.session.get('username')));
      if (band.voters.indexOf(store.session.get('username') !== -1)) {
        return (<BandList band={band.name} vote={band.votes} imgURL={band.img} key={i}  />);
      }
    })
    return (
      <div id="voted">

      <div id="bandSearch">
        <Link to= "/searchMainPage"> <img src='/assets/btbBlack.svg' alt="btb" id="btb"/> </Link>
        <Nav/>

      </div>
      <ul id="bands">
        {votedBands}
      </ul>
      </div>

    )
  }
});
export default Votes;



// {bands: store.SearchPageBand.get('votes')}
