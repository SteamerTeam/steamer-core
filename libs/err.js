"use strict";
/**
 * Error and Warning
 * by heyli 2016.06.23
 */

var log = require('./log');

function Err(msg) {
	log.error(msg);
}

module.exports = {
	ConfigMissing: function(conf) {
		let msg = conf + " is missing or " + conf + " is empty";
		throw new Err(msg);
	},
	FileExistErr: function(file) {
		let msg = file + " has existed";
		throw new Err(msg);
	},
	FileNotExistErr: function(file) {
		let msg = file + " not exists";
		throw new Err(msg);
	},
	FolderExistErr: function(folder) {
		let msg = folder + " has existed";
		throw new Err(msg);
	},
	FolderNotExistErr: function(folder) {
		let msg = folder + " not exists";
		throw new Err(msg);
	},
};