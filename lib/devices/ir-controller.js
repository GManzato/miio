'use strict';

const { Thing } = require('abstract-things');
const { RemoteControl } = require('abstract-things/controllers');
const MiioApi = require('../device');

module.exports = class extends Thing
	.with(RemoteControl, MiioApi)
{
	static get type() {
		return 'miio:ir-controller';
	}

	play(code) {
		return this.call('miIO.ir_play', {code: code});
	}

	read(key) {
		return this.call('miIO.ir_read', {"key": ""+key});
	}

	learn(key) {
		return this.call('miIO.ir_learn', {"key": ""+key});
	}

};
