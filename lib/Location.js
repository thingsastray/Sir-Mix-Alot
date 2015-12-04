var Model = require('./Model');
var db = require('./DataStore').store;
var User = require('./User');
var Account = require('./Account');
var Message = require('./Message');

module.exports = Location;

function Location () {
	var LocationSchema = {
		lng: Number,
		lat: Number
	};
	Model.call(this, LocationSchema);
	Model.extend(Location);
}