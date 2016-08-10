import Backbone from 'backbone';

import settings from '../settings';



// const VoteModel = Backbone.Model.extend({
  // urlRoot: `https://baas.kinvey.com/appdata/${settings.appKey}/Spotify`,
//   idAttribute: 'id',
//   defaults: {
//     votes: 1,
//   },
//   newVote: function() {
//     if (this.get('voters').user.indexOf(localStorage.username) === -1) {
//       this.get('voters').user = this.get('voters').user.concat(localStorage.username);
//       this.set({
//         votes: this.get('votes') + 1
//       });
//       this.save();
//     } else {
//       console.log('already voted');
//     }
//   },
// });
//
// export default VoteModel;


const voteModel = Backbone.Model.extend({
  url:`https://baas.kinvey.com/appdata/kid_SJKu0nJF/Spotify`,
  idAttribute: '_id',
  defaults: {
    votes:0
  }
});

export default voteModel;
