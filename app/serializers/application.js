import DS from 'ember-data';
import moment from 'moment';

export default DS.RESTSerializer.extend({
/*	serialize(snapshot){
		let json =  this._super(...arguments);
		let date = snapshot.__attributes.date;
		json.date = moment(date).format('YYYY-MM-DDTH:M:SS.MSZ');
		console.log(json.date);
		return json;
	}*/
});
