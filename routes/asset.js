const express = require('express');

const router = express.Router();

const { asyncMiddleware } = require('../middlewares/async');
const { getAssets } = require('../helpers/requests');

/* GET exchanges */
router.get('/', asyncMiddleware(async (req, res, next) => {
	let assets = {};
	try {
		assets = await getAssets();
		console.log(assets.data);
	} catch (err) {
		console.error(err);
	}
	res.render('asset', {
		title: 'Assets',
		assets,
	});
}));

module.exports = router;