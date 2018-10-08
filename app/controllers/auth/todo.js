import Controller from '@ember/controller';
import Checkbox from '@ember/component/checkbox';
import { set } from '@ember/object';

export default Controller.extend({
    tasks: [{
		checked: true,
		name: 'Do something 1',
		created: Date(),
		completed: Date()
	}, {
		checked: true,
		name: 'Do something 2',
		created: Date(),
		completed: 'Just now'
	}],
	
	actions: {
		onTaskDelete(task){
			let ans = confirm("Are you sure?");
			if (ans){
				let tasks = this.get('tasks');
				//this.set('task.checked', !check);
				tasks.removeObject(task);
			}
		},
		addTask(taskInput){
			let task = taskInput;
			if (taskInput){
				let tasks = this.get('tasks');
				tasks.pushObject({
					checked: false,
					name: task,
					created: Date(),
					completed: ''
				})
				this.set('taskInput','')
			} else{
				alert('Type a task');
			}
		},
		onCompletedTask(task){
				set(task, 'checked', !task.checked);
				if (!task.checked) set(task, 'completed', '')
				else set(task, 'completed', Date())
		}
	}
});
