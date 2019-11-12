var express = require('express'),
	app = express(),
	port = 3000;

app.use(express.json());

var router = require('./api/router');

router(app);

server = app.listen(port);
