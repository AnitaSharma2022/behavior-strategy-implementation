// #todo

'use strict';

/**
 * converts two boolean values into a binary string
 *  true become "1", false becomes "0"
 * @param {boolean} [a=false] - the left value
 * @param {boolean} [b=false] - the right value
 * @returns {string}
 * @example
 *  // true, false --> '10'
 *  // false, false --> '00'
 *  // false, true --> '01'
 */

// -------- your solutions --------
function booleanTOBinary(a=false, b=false)
{
    if("boolean" !== typeof a)
    {
      throw new TypeError("Value of a should be boolean");
    }
    if("boolean" !== typeof b)
    {
      throw new TypeError("Value of b should be boolean");
    }
    //return (a + b ? '0'+'0' : !a + b ? '1'+'0': a + !b ? '0'+'1':'1'+'1');
    let c = '';
    return c+=a?'1':'0',c+=b?'1':'0',c;
    
}

for (const solution of [secretSolution,booleanTOBinary]) {
  // this function only 4 possible combinations of arguments
  //  it's possible test them all and have 100% confidence in the function
  describe(solution.name + ': converts two booleans to binary', () => {
    it('true, true --> "11"', () => {
      const actual = solution(true,true);
      expect(actual).toEqual('11');
    });
    it('true, false --> "10"', () => {
      const actual = solution(true,false);
      expect(actual).toEqual('10');
    });
    it('false, true --> "01"', () => {
      const actual = solution(false,true);
      expect(actual).toEqual('01');
    });
    it('false,false ---> "00"', () => {
      const actual =solution(false,false);
      expect(actual).toEqual('00');
    });
    it('If the given value is not boolean',()=>{
      expect(() => solution("abcd",1).toThrow(TypeError));
    });
    it('If the given value is not boolean',()=>{
      expect(() => solution(1,"abcd").toThrow(TypeError));
    });
  });
}

// minified solution for testing your tests

// prettier-ignore
function secretSolution(c = false, a = false) { if ("boolean" != typeof c) { throw new TypeError("a is not boolean"); } if ("boolean" != typeof a) { throw new TypeError("b is not boolean"); } let b = ""; return b += c ? "1" : "0", b += a ? "1" : "0", b }
