import DS from 'ember-data';
import { computed } from '@ember/object';
export default DS.Model.extend({
	nombre: 			DS.attr('string'),
	apellidoPaterno: 	DS.attr('string'),
	apellidoMaterno: 	DS.attr('string'),
	curp: 				DS.attr('string'),
	alumno_id: 			DS.belongsTo('alumno'),
	fullName: computed('nombre', 'apellidoPaterno', 'apellidoMaterno', function(){
		let nombre = this.get('nombre');
		let apellidoPaterno = this.get('apellidoPaterno');
		let apellidoMaterno = this.get('apellidoMaterno');

		return `${nombre} ${apellidoPaterno} ${apellidoMaterno}`
	}).volatile()
});
