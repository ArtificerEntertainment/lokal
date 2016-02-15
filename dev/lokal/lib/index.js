'use strict';

const localDependencies = require.main.require(__dirname + '/../../../package.json').localDependencies;

const keys = Object.keys(localDependencies);
keys.forEach(function(item, index) {
  module.exports[item] = require.main.require(localDependencies[item]);
});
