import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, hashHistory } from 'react-router';
import $ from 'jquery';
import Backbone from 'backbone';
import router from './router';
import settings from './settings';
// import Session from './session';




$(document).ajaxSend(function(evt, xhrAjax, jqueryAjax) {
  if (jqueryAjax.url.indexOf('kinvey') !== -1){
  if (localStorage.getItem('authtoken')) {
    xhrAjax.setRequestHeader('Authorization', 'Kinvey ' + localStorage.getItem('authtoken'));
  } else {
    xhrAjax.setRequestHeader('Authorization', 'Basic ' + settings.basicAuth);
  }
}
});

// if(localStorage.getItem('authtoken')){
//   session.retrieve();
// }


Backbone.history.start();


ReactDOM.render(router  , document.getElementById('container'));
