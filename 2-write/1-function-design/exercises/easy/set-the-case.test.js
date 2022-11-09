// #todo

'use strict';

/**
 * sets all the characters in a string to upper or lower case
 * @param {string} [text=''] - the text to casify
 * @param {boolean} [lowerCase=true] - lower case or upper case
 *  true: set the string to lower case
 *  false: set the string to upper case
 * @returns {string} the text in all lower or upper case
 */

// -------- your solutions --------
function toSetCase(text='',lowerCase=true)
{
  return lowerCase ? text.toLowerCase() : text.toUpperCase();
}
for (const solution of [secretSolution]) {
  describe(solution.name + ': sets a text to lower or upper case', () => {
    describe("the function's default parameters", () => {
      it('second parameter defaults to true', () => {
        expect(solution('asdf')).toEqual('asdf');
      });
      it('first parameter defaults to an empty string', () => {
        expect(solution()).toEqual('');
      });
    });
    // write the tests indicated by the comments
    describe('when set to lower case', () => {
      // when the text is an empty string
      //it(_, () => {
        //expect(solution(_, _)).toEqual(_);
      //});
      
     
        it('when the default parameter is an empty string -> ""' ,() => {
            expect(solution()).toEqual('');
        });

        it('when the text is all uppercase -> "ABCD"',() => {    // when the text is all upper case
            expect(solution("ABCD")).toEqual('abcd');
              
        });

       it('when the text is all lowercase -> "abcd"',() => {    // when the text is all lower case
        expect(solution("abcd")).toEqual('abcd');
        });
        
        it('when the text is all mixed -> "ABcd"',() => {    // when the text is mixed upper and lower case
          expect(solution("ABcd")).toEqual('abcd');
          }); 
      it('when the text contain punctuation -> "ab..cd"',() => {    // when the text contains punctuation
            expect(solution("ab..cd")).toEqual('ab..cd');
            });  

        it('when the text contain punctuation -> "ab123cd"',() => {    // when the text contains numbers
            expect(solution("ab123cd")).toEqual('ab123cd');
            });  
    
      // when the text is all upper case
      // when the text is all lower case
      // when the text is mixed upper and lower case
      // when the text contains punctuation
      // when the text contains numbers
    });
    describe('when set to upper case', () => {
      it('when the default parameter is an empty string -> ""' ,() => {
        expect(solution()).toEqual('');
    });

    it('when the text is all uppercase -> "ABCD"',() => {    // when the text is all upper case
        expect(solution("ABCD",false)).toEqual('ABCD');
          
    });

   it('when the text is all lowercase -> "abcd"',() => {    // when the text is all lower case
    expect(solution("abcd",false)).toEqual('ABCD');
    });
    
    it('when the text is all mixed -> "ABcd"',() => {    // when the text is mixed upper and lower case
      expect(solution("ABcd",false)).toEqual('ABCD');
      }); 
  it('when the text contain punctuation -> "ab..cd"',() => {    // when the text contains punctuation
        expect(solution("ab..cd",false)).toEqual('AB..CD');
        });  

    it('when the text contain punctuation -> "ab123cd"',() => {    // when the text contains numbers
        expect(solution("ab123cd",false)).toEqual('AB123CD');
        }); 
    
      // when the text is an empty string
      // when the text is all upper case
      // when the text is all lower case
      // when the text is mixed upper and lower case
      // when the text contains punctuation
      // when the text contains numbers
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = "", b = !0) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("boolean" != typeof b) { throw new TypeError("lowerCase is not a boolean"); } let c = ""; return c = b ? a.toLowerCase() : a.toUpperCase(), c }
