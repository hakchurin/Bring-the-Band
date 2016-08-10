import React from 'react';
import ReactDOM from 'react-dom';
import {router, Route, hashHistory} from 'react-router';
import Backbone from 'backbone';
import VoteModel from '../models/VoteModel';


const VoteCollection= Backbone.Collection.extend({
  model: VoteModel,
  url:`https://baas.kinvey.com/appdata/kid_SJKu0nJF/Spotify`
})

export default VoteCollection;

//
//
// $.ajax({
//   type:'GET',
//   url:`https://baas.kinvey.com/appdata/kid_SJKu0nJF/Spotify`
//   // data:JSON.stringify({votes:this.props.votes}),
//   success: (response)=>{
//
//   }
//
//
// })
