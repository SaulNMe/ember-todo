import Route from '@ember/routing/route';
import {hash} from 'rsvp';
export default Route.extend({
	model(params){
		let alumno = this.store.findRecord('alumno', params.id);
		let asignaturas = this.store.findRecord('alumno-asignatura', params.alumno_id);
		return hash({
			alumno,
			asignaturas
		})
	}
});