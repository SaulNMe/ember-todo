import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		onTaskDelete(task){
			let ans = confirm("Are you sure?");
			if (ans){
				this.store.findRecord('job', task.id, { backgroundReload: false }).then(function(task) {
  				task.destroyRecord(); // => DELETE to /posts/2
				});
			}
		},
		addTask(taskInput){
			let taskName = taskInput;
			let checked = false;
			let created = Date();
			let completed = '';
			if (taskInput){
				let newTask = this.store.createRecord('job',{checked: false, name: taskName, created: Date(), completed: ''});
				newTask.save();
				this.set('taskInput','')
			} else{
				alert('Type a task');
			}
		},
		onCompletedTask(task){
				set(task, 'checked', !task.checked)
				if (!task.checked) set(task, 'completedAt', '')
				else set(task, 'completedAt', Date())
		}
	}
});
