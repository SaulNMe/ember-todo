import DS from 'ember-data';

export default DS.Model.extend({
	nombre: 			DS.attr('string'),
	creditos: 			DS.attr('number'),
	alumno_asignatura_id: 	DS.belongsTo('alumno-asignatura')
});
