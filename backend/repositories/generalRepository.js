let Repository = function () {
};

Repository.prototype.add = function (data, callback) {
    let model = this.model;
    let newitem = new model(data);
    newitem.save(callback);
};

Repository.prototype.update = function (id, body, callback) {
    let query = this.model.update({_id: id}, body);
    query.exec(callback);
};

Repository.prototype.delete = function (id, callback) {
    let model = this.model;
    let query = model.remove({_id: id});
    query.exec(callback);
};

Repository.prototype.deleteMany = function (array, callback) {
    let model = this.model;
    array.forEach(id => {
        let query = model.remove({_id: id});
        query.exec(callback);
    });
};

module.exports = Repository;
