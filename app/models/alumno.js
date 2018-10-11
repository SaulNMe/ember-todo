import DS from 'ember-data';

export default DS.Model.extend({
	matricula: 		DS.attr('string'),
	persona: 		DS.belongsTo('persona'),
	asignatura_id: 	DS.belongsTo('alumno-asignatura')
});
