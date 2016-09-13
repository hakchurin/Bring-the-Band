import Backbone from 'backbone';

import settings from '../settings';






const voteModel = Backbone.Model.extend({
  url:`https://baas.kinvey.com/appdata/kid_SJKu0nJF/BTB-votes`,
  idAttribute: '_id',
  defaults: {
    votes: 0,
    voters: []
  }
});

export default voteModel;
