import Route from '@ember/routing/route';
import {hash} from 'rsvp';
export default Route.extend({
	model(params){
		let alumno = this.store.peekRecord('alumno', params.id);
		let asignaturas = this.store.peekAll('alumno-asignatura', {
			filter:{
				alumno_id: params.id
			}
		})
		return hash({
			alumno,
			asignaturas
		})
	}
});