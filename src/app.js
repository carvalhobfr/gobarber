const express = require('express');
const routes = require('./routes');

class App {
	constructor() {
		this.server = express();
		this.routes();
	}

	middlewares() {
		this.server.use(express.json());
	}

	routes() {
		this.server.user(routes);
	}
}

module.exports = new App().server;
