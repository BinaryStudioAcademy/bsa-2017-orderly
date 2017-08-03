var Repository = function(){};

Repository.prototype.add = function(data, callback){
	var model = this.model;
	var newitem = new model(data);
	newitem.save(callback);
};

Repository.prototype.update = function(id, body, callback){
	var query = this.model.update({_id:id}, body);
	query.exec(callback);
};

Repository.prototype.delete = function(id, callback){
	var model = this.model;
	var query = model.remove({_id:id});
	query.exec(callback);
};

Repository.prototype.deleteMany = function(array, callback){
	var model = this.model;
	array.forEach(id => {
		var query = model.remove({_id:id});
		query.exec(callback);
	});
};

module.exports = Repository;