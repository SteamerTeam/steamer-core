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
		let GlobalConf = require(GlobalConfPath);
		return GlobalConf;
	},
	local: function() {
		if (!fs.existsSync(LocalConfPath)) {
			return null;
		}
		let LocalConf = require(LocalConfPath);
		return LocalConf;
	},
	default: function() {
		let conf = this.local() || this.global();

		(argv.g || argv.global) && (conf = this.global());

		return conf;
	},
	defaultPath: function() {
		let confPath = this.localPath() || this.globalPath();

		(argv.g || argv.global) && (confPath = this.globalPath());

		return confPath;
	},
	write: function(confPath, conf) {
		if (fs.existsSync(confPath)) {
			fs.writeFileSync(confPath, "module.exports = " + JSON.stringify(conf, null, 4) + ";");
		}
	},
	globalPath: function() {
		if (!fs.existsSync(GlobalConfPath)) {
			return null;
		}
		return GlobalConfPath;
	},
	localPath: function() {
		if (!fs.existsSync(LocalConfPath)) {
			return null;
		}
		return LocalConfPath;
	}
};