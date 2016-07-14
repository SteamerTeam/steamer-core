"use strict";

const fs = require('fs-extra'),
	  path = require('path'),
	  argv = require('yargs').argv,
	  _ = require('lodash'),
	  Err = require('steamer-core').Err;


const pkgPrefix = 'steamer-plugin-';

var GlobalConfPath = path.dirname(__dirname) + '/conf/.strconf',
	LocalConfPath = path.resolve('./.strconf');


module.exports = {
	global: function() {
		if (!fs.existsSync(GlobalConfPath)) {
			return null;
		}
		let GlobalConf = JSON.parse(fs.readFileSync(GlobalConfPath).toString());
		return GlobalConf;
	},
	local: function() {
		if (!fs.existsSync(LocalConfPath)) {
			return null;
		}
		let LocalConf = JSON.parse(fs.readFileSync(LocalConfPath).toString());
		return LocalConf;
	},
	default: function() {
		let conf = this.local() || this.global();

		argv.g && argv.global && (conf = this.global());

		return conf;
	},
	write: function() {
		
	}
};