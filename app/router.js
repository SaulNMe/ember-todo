import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('auth',{path: '/'}, function() {
    this.route('todo',{path: '/'});
    this.route('rails-todo');
  });
});

export default Router;
