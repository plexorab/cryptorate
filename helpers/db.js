const mongoose = require('mongoose');
mongoose.Promise = require('q').Promise;

const Asset = require('../models/Asset');

const saveAssets = async (assets) => {
	for (let i=0; i<assets.length; i++) {
		let asset = new Asset(assets[i]);
		asset.isNew = true;
		asset.save((err, doc) => {
			if (err) {
				console.error(err);
				return err;
			} else {
				console.log('saved');
			}
		});
	}
	return true;
}

module.exports = {
	saveAssets,
};