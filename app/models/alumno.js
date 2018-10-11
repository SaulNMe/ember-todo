import DS from 'ember-data';

export default DS.Model.extend({
	matricula: 		DS.attr('string'),
	persona: 		DS.belongsTo('persona')/*,
	alumno_asignatura: 	DS.belongsTo('alumno-asignatura')*/
});
