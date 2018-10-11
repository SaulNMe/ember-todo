import Component from '@ember/component';

export default Component.extend({
	onSomethingDelete(something){
		// Override me...
	},
	actions:{
		removeSomething(something){
			this.onSomethingDelete(something);
		}
	}
});
