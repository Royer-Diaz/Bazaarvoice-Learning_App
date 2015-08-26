import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('support');
  this.route('my-profile');
  this.resource('library', function(){
    this.resource('display-lib');
  });
  this.route('contact');
  this.route('messages');
  this.route('tracks');
  this.resource('posts', function(){
    this.route('post');
  });
});

export default Router;
