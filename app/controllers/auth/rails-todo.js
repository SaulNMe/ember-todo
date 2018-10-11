import Controller from '@ember/controller';
import { set } from '@ember/object';
import moment from 'moment';

export default Controller.extend({
	actions: {
		onTaskDelete(task){
			if (confirm("Are you sure?")) task.destroyRecord()
			},
		addTask(taskInput){
			let newTask = this.store.createRecord('job', {
				checked: false, 
				name: taskInput,
				created: Date(),
				completed: null
			}).save().then(() =>
				this.set('taskInput', '')
			);
		},
			onCompletedTask(task){
			task.set('checked', !task.checked) 
			task.set('completed', task.checked ? moment() : '')
			task.save();
		}
	}
});
