import Controller from '@ember/controller';
import { set } from '@ember/object';
import moment from 'moment';

export default Controller.extend({
	actions: {
		onTaskDelete(task){
			let ans = confirm("Are you sure?");
			if (ans){
				this.store.findRecord('job', task.id, { backgroundReload: false }).then(function(task) {
  				task.destroyRecord(); 
				});
			}
		},
		addTask(taskInput){
			let taskName = taskInput;
			if (taskInput){
				let newTask = this.store.createRecord('job', {
					checked: false, 
					name: taskName,
					created: Date(), 
					completed: ''
				});
				newTask.save();
				this.set('taskInput','')
			} else{
				alert('Type a task');
			}
		},
			onCompletedTask(task){
			task.set('checked', !task.checked) 
			if (!task.checked){
				task.set('completed', '')
			} else {
				task.set('completed', moment().format('YYYY-MM-DDTH:M:SS.MSZ'));
			}
			task.save();
		}
	}
});
