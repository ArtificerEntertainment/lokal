'use strict';

const local = require('./../lib/index.js');
const assert = require('assert');

describe('localDependencies', () => {
  it('loads dependency1 correctly', () => {
    assert.equal(local.dependency1, 1);
  });

  it('loads dependency-2 correctly', () => {
    assert.equal(local['dependency-2'], 2);
  });

  it('loads dependency3 correctly', () => {
    assert.equal(local.dependency3, 3);
  });
});
