import Component from '@ember/component';

export default Component.extend({
	onCompletedTask(task){
		//override me...
	},
	onTaskDelete(task){
		//override me...
	}
});
