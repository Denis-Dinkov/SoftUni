const mathEnforcer = require("./Math Enforcer");
const { assert } = require("chai");

describe("Test object methods", () => {
  describe("Tests addFive method functionality", () => {
    //wrong input
    it("If parameter is undefined should return undefined", () => {
      assert.equal(mathEnforcer.addFive(undefined), undefined);
    });
    it("If parameter is null should return undefined", () => {
      assert.equal(mathEnforcer.addFive(null), undefined);
    });
    it("If parameter is array should return undefined", () => {
      assert.equal(mathEnforcer.addFive([]), undefined);
    });
    it("If parameter is object should return undefind", () => {
      assert.equal(mathEnforcer.addFive({}), undefined);
    });
    it("If parameter is string should return undefined", () => {
      assert.equal(mathEnforcer.addFive("da"), undefined);
    });
    //correct inputs
    it("Should return result with positive number", () => {
      assert.equal(mathEnforcer.addFive(5), 10);
    });
    it("Should return result with negative number", () => {
      assert.equal(mathEnforcer.addFive(-10), -5);
    });
    it("Should return result with floating number", () => {
      assert.equal(mathEnforcer.addFive(2.5), 7.5);
    });
    it("Should return result with floating number", () => {
      assert.equal(mathEnforcer.addFive(2.51), 7.51);
    });
  });
  describe("Test subtractTen method functionality", () => {
    //wrong input
    it("If parameter is undefined should return undefined", () => {
      assert.equal(mathEnforcer.subtractTen(undefined), undefined);
    });
    it("If parameter is null should return undefined", () => {
      assert.equal(mathEnforcer.subtractTen(null), undefined);
    });
    it("If parameter is array should return undefined", () => {
      assert.equal(mathEnforcer.subtractTen([]), undefined);
    });
    it("If parameter is object should return undefind", () => {
      assert.equal(mathEnforcer.subtractTen({}), undefined);
    });
    it("If parameter is string should return undefined", () => {
      assert.equal(mathEnforcer.subtractTen("da"), undefined);
    });
    //correct inputs
    it("Should return result with positive number", () => {
      assert.equal(mathEnforcer.subtractTen(15), 5);
    });
    it("Should return result with negative number", () => {
      assert.equal(mathEnforcer.subtractTen(-10), -20);
    });
    it("Should return result with floating number", () => {
      assert.equal(mathEnforcer.subtractTen(12.5), 2.5);
    });
    it("Should return result with floating number", () => {
      assert.equal(mathEnforcer.subtractTen(12.51), 2.51);
    });
  });
  describe("Test sum method functionality", () => {
    //wrong input
    it("If parameter is undefined should return undefined", () => {
      assert.equal(mathEnforcer.sum(1, undefined), undefined);
    });
    it("If parameter is null should return undefined", () => {
      assert.equal(mathEnforcer.sum(1, null), undefined);
    });
    it("If parameter is array should return undefined", () => {
      assert.equal(mathEnforcer.sum(1, []), undefined);
    });
    it("If parameter is object should return undefind", () => {
      assert.equal(mathEnforcer.sum(1, {}), undefined);
    });
    it("If parameter is string should return undefined", () => {
      assert.equal(mathEnforcer.sum(1, "da"), undefined);
    });
    //correct inputs
    it("Should return result with positive number", () => {
      assert.equal(mathEnforcer.sum(5, 5), 10);
    });
    it("Should return result with negative number", () => {
      assert.equal(mathEnforcer.sum(-10, -10), -20);
    });
    it("Should return result with floating number ", () => {
      assert.equal(mathEnforcer.sum(12.5, 2.5), 15);
    });
    it("Should return result with floating number ", () => {
      assert.equal(mathEnforcer.sum(12.51, 2.51), 15.02);
    });
  });
});
