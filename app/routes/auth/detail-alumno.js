import Route from '@ember/routing/route';
import {hash} from 'rsvp';
export default Route.extend({
	model(params){
		let alumno = this.store.peekRecord('alumno', params.id);
		let alum_asi = this.store.peekRecord('alumno', {nombre: 'Alumno1'})
		return hash({
			alumno
		})
	}
});