import React from 'react';
import ReactDOM from 'react-dom';
import {router, Route, hashHistory} from 'react-router';
import store from './store';
import SearchMainPage from './searchMainPage';
import SearchPageBand from './collections/searchPageBands';
import BandList from './bandList';




const Votes = React.createClass({
  getInitialState: function(){
    votes:store.VoteCollection.toJSON()

    // return{bands:store.VotedBands.toJSON()}
  },


  componentDidMount: function(){
    store.SearchPagebands.fetch();
    store.SearchPageBands.on('update change', () =>{
      // this.setState({bands:store.VotedBands.toJSON()});
      store.VoteCollection.on('update', this.searched);

    })
  },



  render: function() {
    console.log(votedBands);
    let votedBands = this.state.bands.map((band,i)=>{
        return < BandList band={band.name} vote={band.votes} imgURL={band.image}  />
    })
    return (
      <ul>
      <SearchBar />
      {votedBands}
      </ul>

    )
  }
});
export default Votes;



// {bands: store.SearchPageBand.get('votes')}
