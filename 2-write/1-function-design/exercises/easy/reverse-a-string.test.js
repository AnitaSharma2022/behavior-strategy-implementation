// #todo

'use strict';

/**
 * reverses a string
 * @param {string} [toReverse=''] - the string to reverse
 * @returns {string} the reversed argument
 */

// -------- your solutions --------
function reverseString(start='')
{
  if(typeof start !== 'string')
  {
      throw new TypeError("start should be a string");
  }
  return start.split("").reverse().join("");
}

for (const solution of [secretSolution,reverseString]) {
  // the main test suite for the function
  describe(solution.name + ': reverses a string', () => {
    it('default parameter is an empty string -> ""', () => {
      expect(solution()).toEqual('');
    });
    it('an empty string -> ""', () => {
      expect(solution('')).toEqual('');
    });
    it('a string with all capital letters', () => {
      expect(solution('ASDF')).toEqual('FDSA');
    });
    // write at least 5 more tests ...
    it("a string with all small letters", () => {
      expect(solution("anita")).toEqual("atina");
    });

    it("a string mixed  with capital and  small letters", () => {
      expect(solution("Hello")).toEqual("olleH");
    });
    it("a string with numbers and letters", () => {
      expect(solution("Hello1")).toEqual("1olleH");
    });

    it("Should throw TypeError when the start is  not a string", () => {
      expect(() => solution(1)).toThrow(TypeError);
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = '') { if ("string" != typeof a) throw new TypeError("toReverse is not a string"); return a.split("").reverse().join("") }
