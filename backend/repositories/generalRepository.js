class Repository {

	getAll() {
		return this.model.find({});
	}

	getById(id) {
		return this.model.findById(id);
	}

	add(data) {
		return new this.model(data).save();
	}

	update(id, data) {
		return this.model.findByIdAndUpdate(id, data, {'new': true});
	}

	remove(id) {
		return this.model.findByIdAndRemove(id);
	}

}

module.exports = Repository

