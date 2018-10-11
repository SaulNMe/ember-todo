import Route from '@ember/routing/route';
import {hash} from 'rsvp'
export default Route.extend({
	model(){
		let jobs = this.store.findAll('job')
		let alumnos = this.store.findAll('alumno')
		let asignaturas = this.store.findAll('asignatura')
		let alumno_asignaturas = this.store.findAll('alumno-asignatura');
		return hash({
			jobs, 
			alumnos,
			asignaturas,
			alumno_asignaturas
		});
	}
});
