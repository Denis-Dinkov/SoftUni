const isOddOrEven = require("./Even or Odd");
const { assert } = require("chai");

describe("Check functionality of function", () => {
  //negative test
  it("If parameter is number should return undifined", () => {
    assert.equal(isOddOrEven(1), undefined);
  });
  it("If parameter is object should return undifined", () => {
    assert.equal(isOddOrEven({}), undefined);
  });
  it("If parameter is array should return undifined", () => {
    assert.equal(isOddOrEven([]), undefined);
  });
  //positive test
  it("If parameter length is even should return even", () => {
    assert.equal(isOddOrEven("da"), "even");
  });
  it("If parameter length is odd should return odd", () => {
    assert.equal(isOddOrEven("yes"), "odd");
  });
});
