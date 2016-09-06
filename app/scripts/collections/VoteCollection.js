import React from 'react';
import ReactDOM from 'react-dom';
import {router, Route, hashHistory} from 'react-router';
import Backbone from 'backbone';
import VoteModel from '../models/VoteModel';


const VoteCollection= Backbone.Collection.extend({
  model: VoteModel,
  url:`https://baas.kinvey.com/appdata/kid_SJKu0nJF/BTB-votes`,
  addVoteFunction: function(votingBand, bandImg){
    console.log(votingBand);
  this.create({
    votes: 1,
    name: votingBand,
    img: bandImg
  });


  },

})




export default VoteCollection;
