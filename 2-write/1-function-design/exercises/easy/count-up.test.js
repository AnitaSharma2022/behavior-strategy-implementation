// #todo

'use strict';

/**
 * builds an array counting up from 0 to `max`
 * @param {number} [max=0] - the number to count up to
 *  max must be an integer that is greater than 0
 * @returns {number[]} an array of all numbers from 0 to `max`
 */

// -------- your solutions --------
function countUp1(start=0)
{
  let result=[];
  if(start < 0)
  {
    throw new RangeError("Start should be a positive number")
  }
  if(!Number.isInteger(start))
  {
      throw new Error("Start should be an integer")
  }
  if(typeof start !== 'number')
  {
    throw new TypeError("Start should be a number");
  }
  for(let i=0;i<=start;i++)
  {
     result.push(i); 
  }
  return result;
}

for (const solution of [secretSolution,countUp1]) {
  // the main test suite for the function
  describe(solution.name + ': counts up from 0', () => {
    it('default parameter is 0 -> [0]', () => {
      const actual = solution();
      expect(actual).toEqual([0]);
    });
    it('0 -> [0]', () => {
      expect(solution(0)).toEqual([0]);
    });
    it('1 -> [0, 1]', () => {
      expect(solution(1)).toEqual([0, 1]);
    });
    // write at least 5 more tests ...
    it('2 -> [0, 1,2]', () => {
      expect(solution(2)).toEqual([0, 1,2]);
    });

    it('5 -> [0, 1,2,3,,4,5]', () => {
      expect(solution(5)).toEqual([0, 1,2,3,4,5]);
    });

    it("Should throw RangeError when the start is  not a positive number", () => {
      expect (() => solution(-5)).toThrow(RangeError)
    });
    it("Should throw TypeError when the start is  not a number", () => {
      expect (() => solution("5")).toThrow(Error)
    });
    it("Should throw Error when the start is  not an integer", () => {
      expect (() => solution(5.6)).toThrow(Error)
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = 0) { if ("number" != typeof a) throw new TypeError("max is not a number"); if (!Number.isInteger(a)) throw new Error("max is not an integer"); if (0 > a) throw new RangeError("max is less than 0"); const b = []; for (let c = 0; c <= a; c++)b.push(c); return b }
