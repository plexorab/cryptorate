const express = require('express');

const router = express.Router();

const { asyncMiddleware } = require('../middlewares/async');
const { getExchanges } = require('../helpers/requests');

/* GET exchanges */
router.get('/', asyncMiddleware(async (req, res, next) => {
	let exchanges = {};
	try {
		exchanges = await getExchanges();
	} catch (err) {
		console.error(err);
	}
	res.render('exchange', {
		title: 'Exchanges',
		exchanges,
	});
}));

module.exports = router;
