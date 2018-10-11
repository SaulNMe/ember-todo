import DS from 'ember-data';
import moment from 'moment';
import { ActiveModelSerializer } from 'active-model-adapter';

export default ActiveModelSerializer.extend({
	serialize(snapshot){
		let json =  this._super(...arguments);
		let created = snapshot.__attributes.created;
		let completed = snapshot.__attributes.completed;
		json.created = moment(created).format();
		json.completed = moment(completed).format();
		return json;
	}
});
