import DS from 'ember-data';

export default DS.Model.extend({
	checked: 	DS.attr('boolean'),
	name: 		DS.attr('string'),
	created: 	DS.attr('date'),
	completed: 	DS.attr('date')
});
