import Controller from '@ember/controller';
import Component from '@ember/component';

export default Controller.extend({
	cities: ['Barcelona', 'London', 'New York', 'Porto'],
  	destination: 'London',
	actions:{
		saveAlumno(alumno){
		alumno.save();
	},
	chooseDestination(city) {
  		this.set('destination', city);
  		// this.calculateRoute();
  		// this.updatePrice();
	}
	}
});
