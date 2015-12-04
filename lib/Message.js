var Model = require('./Model');
var db = require('./DataStore').store;
var User = require('./User');
var Account = require('./Account');

module.exports = Message;

function Message () {
	var MessageSchema = {
		from: User,
		to: User,
		message: String,
		sent: Date
	};
	Model.call(this, MessageSchema);
	Model.extend(Message);
}