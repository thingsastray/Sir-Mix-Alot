var db = require('./DataStore').store;
var extend = require('./extend');
module.exports = Model;

function Model (schema){
	this.schema = schema;
	this.id = null;
	for(var k in schema) {
		this[k] = null;
	}
	db[this.constructor.name] = db[this.constructor.name] || [];
}



Model.prototype.save = function() {
	if(this.id === null){
		this.id = this.constructor.getNextId();
	}
	db[this.constructor.name].push(this);
};


Model.prototype.destroy = function(){
	if(this.id !== null){
    var selfID = this.id;
    db[this.constructor.name].forEach(function(obj,i,store){
      if(obj.id === selfID){
        store.splice(i,1);
      }
    });
  }
};

Model.getNextId = function(find) {
		//It might not always work
		return db[this.name].length + 1;
};

Model.find = function(id) {
  for (var i = 0; i < db[this.name].length; i++) {
  	if(db[this.name][i].id === id){
  		return db[this.name][i];
  	}
  }
  return null;
};

Model.extend = function(klass) {
	for(var i in this){
		klass[i] = this[i];
	}
	for(var j in this.prototype){
		klass.prototype[j] = this.prototype[j];
	}
};