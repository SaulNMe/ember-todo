import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
	model(){
		let alumno = this.store.peekAll('alumno');
		let persona = this.store.peekAll('persona');
		return hash({
			alumno,
			persona
		});
	}
});
