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
    this.route('alumnos');
    this.route('asignaturas');
    this.route('detail-alumno',{path: 'alumnos/detalle/:id'});
  });
});

export default Router;
