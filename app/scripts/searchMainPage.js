
import React from 'react';
import ReactDOM from 'react-dom';
import {router, Route, hashHistory} from 'react-router';
import store from './store';
import BandList from './bandList';
import SearchBandModel from './models/searchBandModel';
// import SearchPageBand from './collections/searchPageBand';
import SearchBar from './searchBar';
import SearchPageBand from './collections/searchPageBands';

const SearchMainPage = React.createClass({
getInitialState: function(){
  return {
    bands:store.SearchPageBand.toJSON()

  }
},
componentDidMount: function(){
  store.SearchPageBand.on('update', this.searched)
  },
  searched: function(){
    this.setState({bands: store.SearchPageBand.toJSON()});
  },
render: function(){
console.log(bandName);
      let bandName;
      if (this.state.bands[0]){
        bandName = this.state.bands.map((band,i)=>{
          return < SearchPageBand bandName={band} key={i} />
          // console.log(band.store);
        })
      }
        return(
          <div>
          <SearchBar />
          <ul>
          {bandName}
          </ul>
          </div>

        )

    }
});
export default SearchMainPage;
