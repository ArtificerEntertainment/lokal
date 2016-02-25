'use strict';

const lokal = require('./../dev/lokal/lib/index.js');
const assert = require('assert');
const rewire = require('rewire');

describe('localDependencies', () => {
  it('loads dependency1 correctly', () => {
    assert.equal(lokal('dependency1'), 1);
  });

  it('loads dependency-2 correctly', () => {
    assert.equal(lokal('dependency-2'), 2);
  });

  it('loads dependency3 correctly', () => {
    assert.equal(lokal('dependency3')(), 3);
  });

  it('loads dependency3 correctly using rewire', () => {
    const d3 = lokal('dependency3', rewire);
    assert.equal(d3(), 3);
    assert.equal(d3.__get__('privateVariable'), 33);
  });
});
