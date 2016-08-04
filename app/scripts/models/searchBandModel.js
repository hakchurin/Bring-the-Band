import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Backbone from 'backbone';





const SearchBandModel = Backbone.Model.extend({
  defaults: {
    bandName: '',
    url: ``,
    votes: 0
  }
})

export default SearchBandModel;
