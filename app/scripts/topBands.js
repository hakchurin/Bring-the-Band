//
//
// import React from 'react';
// import ReactDOM from 'react-dom';
// import {router, Route, hashHistory} from 'react-router';
// import store from './store';
// import SearchMainPage from './searchMainPage';
// import SearchPageBand from './collections/searchPageBands';
//
//
//
//
//
// const topVotes = React.createClass ({
//   getInitialState: function () {
//     return {
//       votes:store.voteCollection.toJSON()
//     };
//   },
//   updateState: function (){
//     this.setState({votes: store.voteCollection.toJSON()});
//   },
//   componentWillMount: function (){
//     store.voteCollection.fetch()
//   },
//   shouldComponentUpdate: function(props, state) {
//     if (store.session.get('authtoken') && !state.voteCollection.length) {
//       store.votecollection.fetch();
//     }
//     return true;
//   },
//   componentDidMount: function(){
//     store.session.on('update', this.updateState);
//     store.session.off('update', this.updateState);
//   },
//   render: function() {
//     let sortedBands = _.sortBy(this.state.voteCollection, (BandList));
//
//     let bandVotes = sortedBands.map((BandList, i) => {
//       return (<nameOfBand = {bandName} band= {topVotes} />);
//     });
//
//     return (
//       <div className= "votedPage">
//       <li>
//         {this.state.artists.name}
//       </li>
//       </div>
//
//     )
//   }
// });
//
// export default topVotes;
