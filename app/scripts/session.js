import router from './router';
import $ from 'jquery';
import Backbone from 'backbone';
import settings from './settings';




const session = Backbone.Model.extend({
  urlRoot: `https://baas.kinvey.com/user/${settings.appId}/login`,
  defaults: {
    username: '',
    authtoken:'',
    votedBands: []
  },
  parse:function(response){
    if (response){
      return{
        authtoken: response._kmd.authtoken,
        username: response.username,
        userId: response._id,
        votedBands: response.votedBands
      };
    }
  },
  login: function (username,password) {
    console.log(this.toJSON());
    this.save({username:username, password:password},
     {
       success: (model,response) => {
         this.unset('password');
         console.log(this.toJSON());
         this.trigger('change');
         window.localStorage.setItem('authtoken', response._kmd.authtoken);
       },

     });
   },
  signup: function(data){
    $.ajax({
      type:'POST',
      url:`https:/baas.kinvey.com/user/${settings.appId}`,
      data:JSON.stringify({username:data.username, password: data.password}),
      contentType: 'application/json',
      success: (s) => {
        this.set({
          username:s.username,
          authtoken:s._kmd.authtoken,
          _id: s._id
        });

        this.unset('password');
        window.localStorage.setItem('authtoken', s._kmd.authtoken);
      },
    })
  },
  logout: function() {
  $.ajax({
     type: 'POST',
     url: `https://baas.kinvey.com/user/${settings.appId}/_logout`,

   })
   localStorage.removeItem('authtoken')
   this.clear()
//    store.settings.history.push('login')
 },
  retrieve: function(){
    this.fetch({
      url:`https://baas.kinvey.com/user/${settings.appId}/_me`
    });
  }
});


// let session = new Session();

export default session;
