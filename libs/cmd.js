"use strict";

const _ = require('lodash');

module.exports = {
	unshift: function(cmds) {
		if (!_.isArray(cmds)) {
			cmds = [];
		}
		return cmds.splice(0, 1)[0] || '';
	}
};