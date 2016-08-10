
import React from 'react';
import ReactDOM from 'react-dom';
import {router, Route, hashHistory} from 'react-router';
import store from './store';
import BandList from './bandList';
import SearchBandModel from './models/searchBandModel';
// import SearchPageBand from './collections/searchPageBand';
import SearchBar from './searchBar';
import SearchPageBand from './collections/searchPageBands';
import VoteCollection from './collections/VoteCollection';
import Nav from './nav'


const SearchMainPage = React.createClass({
getInitialState: function(){
  return {
    bands:store.SearchPageBand.toJSON(),

  }
},
componentDidMount: function(){
  store.SearchPageBand.on('update', this.searched);
  },
  searched: function(){
    this.setState({bands: store.SearchPageBand.toJSON()});
  },

render: function(){

  let bandName;

      if (this.state.bands[0]){
        bandName = this.state.bands.map((band,i)=>{
          console.log(band);
          return < BandList band={band.artist} imgURL={band.image} vote={band.votes} key={i} />

        })
      }



        return(
          <div>
          <SearchBar />
          <ul id="theBand">
          {bandName}
          </ul>
          </div>

        )

    }
});
export default SearchMainPage;
