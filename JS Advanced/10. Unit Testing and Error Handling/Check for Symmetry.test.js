const isSymmetric = require('./Check for Symmetry');
const { assert } = require('chai');

describe('It should meet the following requirements:', () => {
  it('Return false for any input that isn’t of the correct typ',()=>{
    assert(isSymmetric({}),"false")
  })
})