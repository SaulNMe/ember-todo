import Component from '@ember/component';

export default Component.extend({
	onTaskDelete(task){
		// Override me...
	},
	actions:{
		removeTask(task){
			this.onTaskDelete(task);
		}
	}
});
