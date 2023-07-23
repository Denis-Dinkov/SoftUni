const lookupChar = require("./Char Lookup");
const { assert } = require("chai");

describe("Test functionality of method", () => {
  //positive test
  it("Should return character of specified index", () => {
    assert.equal(lookupChar("love", 0), "l");
  });
  it("Should return undifined if first parameter is array", () => {
    assert.equal(lookupChar([], 3), undefined);
  });
  it("Should return undifined if first parameter is object", () => {
    assert.equal(lookupChar({}, 3), undefined);
  });
  it("Should return undifined if first parameter is number", () => {
    assert.equal(lookupChar(3, 3), undefined);
  });
  it("Should return undifined if second parameter is array", () => {
    assert.equal(lookupChar("da", []), undefined);
  });
  it("Should return undifined if second parameter is object", () => {
    assert.equal(lookupChar("da", {}), undefined);
  });
  it("Should return undifined if second parameter is not hole number", () => {
    assert.equal(lookupChar("da", 5.5), undefined);
  });
  it("Should return undifined if second parameter is string", () => {
    assert.equal(lookupChar("da", "da"), undefined);
  });
  it("Should return Incorrect index if index is incorrect", () => {
    assert.equal(lookupChar("da", 4), "Incorrect index");
  });
  it("Should return Incorrect index if index is incorrect", () => {
    assert.equal(lookupChar("da", -4), "Incorrect index");
  });
});
