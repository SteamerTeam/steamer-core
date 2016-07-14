/**
 * Error and Warning
 * by heyli 2016.06.23
 */

var log = require('./log');

module.exports = {
	ConfigMissing: function(conf) {
		log.error(conf + " is missing or " + conf + " is empty");
	},
	FileExistErr: function(file) {
		log.error(file + " has existed");
	},
	FileNotExistErr: function(file) {
		log.error(file + " not exists");
	},
	FolderExistErr: function(folder) {
		log.error(folder + " has existed");
	},
	FolderNotExistErr: function(folder) {
		log.error(folder + " not exists");
	},
};