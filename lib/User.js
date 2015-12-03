module.exports = User;
var db = require('./DataStore').store;
var Model = require('./Model');

function User () {
	var UserSchema = {
		username: String,
		password: String
	};
	Model.call(this, UserSchema);
	Model.extend(User);
}
