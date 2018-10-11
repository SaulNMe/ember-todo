import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
	model(){
		let alumno = this.store.findAll('alumno');
		let persona = this.store.findAll('persona');
		return hash({
			alumno,
			persona
		});
	}
});
