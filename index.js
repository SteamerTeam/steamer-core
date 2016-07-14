"use strict";

const log = require('./libs/log'),
	  err = require('./libs/err'),
	  conf = require('./libs/conf');

module.exports = {
	Log: log,
	Err: err,
	Conf: conf,
};