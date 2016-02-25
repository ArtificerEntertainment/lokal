'use strict';

const nco = require('nco');
const localDependencies = require.main.require(`${__dirname}/../../../package.json`).localDependencies;

module.exports = function(localDependencyName, requireAlternative) {
  const path = `${__dirname}/../../../${localDependencies[localDependencyName]}`
  requireAlternative = nco(requireAlternative, null);
  if(requireAlternative === null) {
    return require(path);
  } else {
    return requireAlternative(path);
  }
};
