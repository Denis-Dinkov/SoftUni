const sum = require('./Sum of Numbers');
const { assert } = require('chai');

describe('It should meet the following requirements:',() => {
  it('Take an array of numbers as an argument',() => {
    assert(sum([1,2]),3)
  })
  it('Take an array of numbers as an argument',() => {
    assert(sum({}),)
  })
})