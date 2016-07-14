"use strict";

const log = require('./libs/log'),
	  err = require('./libs/err'),
	  conf = require('./libs/conf'),
	  cmd = require('./libs/cmd'),
	  repo = require('./conf/repo');

module.exports = {
	Log: log,
	Err: err,
	Conf: conf,
	Repo: repo,
	Cmd: cmd,
};