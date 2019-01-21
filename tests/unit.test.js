const { expect } = require('chai');

const { add, compute, subtract } = require('../');

describe('add', function() {
  it('should add two numbers', function() {
    expect(add(2, 3)).to.equal(5);
  });
});

describe('subtract', function() {
  it('should subtract two numbers', function() {
    expect(subtract(2, 3)).to.equal(-1);
  });
});

describe('compute', function() {
  it('should apply the specified operation to two numbers', function() {
    expect(compute(2, 3, add)).to.equal(5);
    expect(compute(2, 3, subtract)).to.equal(-1);
  });
});
