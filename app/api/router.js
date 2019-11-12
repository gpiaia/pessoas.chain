'use strict';
module.exports = async function(app) {
	var blockchain = require('./controller');

	app.route('/checkin')
		.post(blockchain.checkin);
	app.route('/pessoas')
		.get(blockchain.getQtd);
}
