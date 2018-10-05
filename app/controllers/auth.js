import Controller from '@ember/controller';

export default Controller.extend({
	actions:{
		todo(){
			this.transitionToRoute('auth.todo');
		},
		rubyTodo(){
			this.transitionToRoute('auth.rails-todo');
		}
	}
});
