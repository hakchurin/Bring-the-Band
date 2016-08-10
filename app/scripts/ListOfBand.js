

import React from 'react';
import ReactDOM from 'react-dom';
import {router, Route, hashHistory} from 'react-router';
import store from './store';
import SearchMainPage from './searchMainPage';
import SearchPageBand from './collections/searchPageBands';







const ListOfBand = React.createClass({
getInitialState: function(){
  return{bands:store.SearchPageBand.get('bandName')}
},
componentDidMount: function(){
  store.SearchPageBand.on('update', this.searched);
},

  render: function(){

//   let list= this.artists.items.map((artist,i) => {
//  return  <SearchPageBand=  key={i} artists= {this.artists.name} />
// })
// }


    return(

      <li>
      {this.state.artists.name}

      </li>
    )

}
});
export default ListOfBand;
