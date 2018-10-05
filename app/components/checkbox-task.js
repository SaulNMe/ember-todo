import Component from '@ember/component';
import Checkbox from '@ember/component/checkbox';
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
