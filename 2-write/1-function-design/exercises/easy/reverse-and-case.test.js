// #todo

'use strict';

/**
 * reverses a string and sets all the characters to upper or lower case
 * @param {string} [text=''] - the text to reverse and casify
 * @param {boolean} [lowerCase=true] - lower case or upper case
 *  true: set the string to lower case
 *  false: set the string to upper case
 * @returns {string} the reversed text in all lower or upper case
 */

// -------- your solutions --------
function reverseString(text='',lowerCase=true)
{
  if(typeof text !== 'string')
  {
    throw new TypeError("Text should be a string");
  }  
  if (typeof lowerCase !== 'boolean')
  {
    throw new TypeError("lowerCase should be a boolean value");
  }
  return lowerCase ? text.split("").reverse().join("").toLowerCase() : text.split("").reverse().join("").toUpperCase();
}
for (const solution of [secretSolution,reverseString]) {
  describe(
    solution.name + ': reverses a string then sets to lower or upper case',
    () => {
      describe("the function's default parameters", () => {
        it('second parameter defaults to true', () => {
          expect(solution('asdf')).toEqual('fdsa');
        });
        it('first parameter defaults to an empty string', () => {
          expect(solution()).toEqual('');
        });
      });
      // write the tests indicated by the comments
      describe('when set to lower case', () => {
        // when the text is an empty string
        //it(_, () => {
         // expect(solution(_, _)).toEqual(_);
        //});
        
        it('default parameter is an empty string -> " "', () => {
          expect(solution()).toEqual('');
        });
        it('Text is all uppercase -> ""', () => {             // when the text is all upper case
          expect(solution("ABCD")).toEqual("dcba");
        });
        it('Text is all lowercase -> ""', () => {            // when the text is all lower case
          expect(solution("abcd")).toEqual("dcba");
        });
        it('Text is all mixed -> ""', () => {            // when the text is mixed upper and lower case
          expect(solution("ABcdE")).toEqual("edcba");
        });
        it('Text contains puntuations -> ""', () => {     // when the text contains punctuation
          expect(solution("AB:cd")).toEqual("dc:ba");
        });
        it('Text contains numbers -> ""', () => {        // when the text contains numbers
          expect(solution("AB12cd")).toEqual("dc21ba");
        });  
        it("Should throw a Type Error if the text is not a string", () => {        // when the text contains numbers
          expect(() => solution(1).toThrow(TypeError));
        });
        // when the text is all upper case
        // when the text is all lower case
        // when the text is mixed upper and lower case
        // when the text contains punctuation
        // when the text contains numbers
      });
      describe('when set to upper case', () => {
        it('default parameter is an empty string -> " "', () => {   // when the text is an empty string
          expect(solution()).toEqual('');
        });
        it('Text is all uppercase -> "ABCD"', () => {     // when the text is all upper case
          expect(solution("ABCD",false)).toEqual("DCBA");
        });
        it('Text is all lowercase -> "abcd"', () => {    // when the text is all lower case
          expect(solution("abcd",false)).toEqual("DCBA");
        });
        it('Text is all mixed -> "ABcd"', () => {    // when the text is mixed upper and lower case
          expect(solution("ABcd",false)).toEqual("DCBA");
        });
        it('Text contains punctuations -> "AB:cd"', () => {     // when the text contains punctuation
          expect(solution("AB:cd",false)).toEqual("DC:BA");
        });
        it('Text contains numbers -> "AB12cd"', () => {    // when the text contains numbers
          expect(solution("AB12cd",false)).toEqual("DC21BA");
        });
        // when the text is an empty string
        // when the text is all upper case
        // when the text is all lower case
        // when the text is mixed upper and lower case
        // when the text contains punctuation
        // when the text contains numbers
      });
    }
  );
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = "", b = !0) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("boolean" != typeof b) { throw new TypeError("lowerCase is not a boolean"); } let c = ""; for (let d = a.length - 1; 0 <= d; d--)c += a[d]; let d = ""; return d = b ? c.toLowerCase() : c.toUpperCase(), d }
