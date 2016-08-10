import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Backbone from 'backbone';





const SearchBandModel = Backbone.Model.extend({
  urlRoot:`https://baas.kinvey.com/appdata/kid_SJKu0nJF/spotify`,

  defaults: {
    bandName: '',
    url: ``,
    votes: 0
  }
})

export default SearchBandModel;
