'use strict';

/**
 * returns true if the value is truthy
 * returns false if the value is falsy
 * @param {any} value
 * @returns {boolean}
 */
const stub = () => {};

/*

*/

for (const solution of [
  secretSolution,
  // stub,
]) {
  /* Execution Paths
      when testing conditionals, you need to be test all paths
  */
  describe(solution.name + ': determines if a value is truthy', () => {
    // the if path
    describe('solution can identify truthy values', () => {
      it('strings', () => {
        const actual = solution(_);
        expect(actual).toStrictEqual(true);
      });
      it('numbers', () => {
        const actual = _;
        expect(actual).toStrictEqual(true);
      });
      it('booleans', () => {
        expect(solution(_)).toStrictEqual(true);
      });
    });
    // the else path
    describe('solution can identify falsy values', () => {
      it('strings', () => {
        _;
      });
      it('numbers', () => {
        _;
      });
      it('booleans', () => {
        _;
      });
      it('undefined', () => {
        _;
      });
      it('null', () => {
        _;
      });
    });
  });
}

// minified solution for testing your tests

// prettier-ignore
function secretSolution(value) { return value ? true : false; }
