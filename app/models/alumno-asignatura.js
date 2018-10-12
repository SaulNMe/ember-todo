import DS from 'ember-data';

export default DS.Model.extend({
	calificacion: 	DS.attr('number'),
	alumno: 		DS.belongsTo('alumno'),
	asignatura: 	DS.belongsTo('asignatura')
});
