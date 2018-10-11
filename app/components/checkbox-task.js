import Component from '@ember/component';

export default Component.extend({
	onCompletedTask(task){
		//Override me...
	},
	actions:{
		completedTask(task){
			this.onCompletedTask(task);
		}
	}
});
