(function() {

    "use strict";

    /**TODO: Need to update this list
     * Tests for the following functions. See README.md for more detail.
     * isTrue
     * isFalse
     * not
     * addOne
     * isEven
     * isIdentical
     * isEqual
     * or
     * and
     * concat
     */


    const randomBoolean = Boolean(Math.round(Math.random()))
    const randomNumber = Math.ceil(Math.random() * 100)

    describe('isOdd', () => {
        it('should be a defined function', () => {
            expect(typeof isOdd).toBe('function');
        })
        it('should return a boolean value if the number 3 is passed', () => {
            expect(typeof isOdd(3)).toBe('boolean')
        })
        it('should return true if the number 3 is passed', () => {
            expect(isOdd(3)).toBe(true);
        })
        it('should return false if the number 2 is passed', () => {
            expect(isOdd(2)).toBe(false);
        })
        it('should return true if the number 73 is passed', () => {
            expect(isOdd(73)).toBe(true);
        })
        it('should return false if the number 200 is passed', () => {
            expect(isOdd(200)).toBe(false);
        })
        it('should return true if the string "23" is passed', () => {
            expect(isOdd("3")).toBe(true);
        })
        it('should return true if the string "20" is passed', () => {
            expect(isOdd("2")).toBe(false);
        })
        it('should return false if the string "three" is passed', () => {
            expect(isOdd("three")).toBe(false);
        })
        it('should return false if NaN is passed', () => {
            expect(isOdd(NaN)).toBe(false);
        })
        it('should return false if null is passed', () => {
            expect(isOdd(null)).toBe(false);
        })
        it('should return false if the number 0 is passed', () => {
            expect(isOdd(0)).toBe(false);
        })
    })

    describe('isVowel', () => {
        it('should be a defined function', () => {
            expect(typeof isVowel).toBe('function');
        })
        it('should return a boolean value if the string "a" is passed', () => {
            expect(typeof isVowel('a')).toBe('boolean');
        })
        it('should return true if "e" is passed', () => {
            expect(isVowel('e')).toBe(true);
        })
        it('should return true if "u" is passed', () => {
            expect(isVowel('u')).toBe(true);
        })
        it('should return true if "I" is passed', () => {
            expect(isVowel('I')).toBe(true);
        })
        it('should return false if "Q" is passed', () => {
            expect(isVowel("Q")).toBe(false);
        })
        it('should return false if "Y" is passed', () => {
            expect(isVowel("Y")).toBe(false);
        })
        it('should return false if the number 1 is passed', () => {
            expect(isVowel(1)).toBe(false);
        })
        it('should return false if the number -1 is passed', () => {
            expect(isVowel(-1)).toBe(false);
        })
        it('should return false if null is passed', () => {
            expect(isVowel(null)).toBe(false);
        })
        it('should return false if "hello" is passed', () => {
            expect(isVowel("hello")).toBe(false);
        })
    })

    describe('combineStrings', () => {
        it('should be a defined function', () => {
            expect(typeof combineStrings).toBe('function')
        })
        it('should return a string type when passed two strings as inputs', () => {
            expect(typeof combineStrings("string", "string")).toBe("string")
        })
        it('should return a "HelloWorld" when passed "Hello" and "World" as string inputs', () => {
            expect(combineStrings("Hello", "World")).toBe("HelloWorld")
        })
        it('should return false when any argument is not a string', () => {
            expect(combineStrings(1, "string")).toBe(false)
        })
        it('should return "sunset" when passed "sun" and "set" as string inputs', () => {
            expect(combineStrings("sun", "set")).toBe("sunset")
        })
        it('should return false when passed boolean values true and true ', () => {
            expect(combineStrings(true, true)).toBe(false)
        })
        it('should return "truetrue" when passed "true" and "true" as string inputs', () => {
            expect(combineStrings("true", "true")).toBe("truetrue")
        })
    })

    describe('sumArgs', () => {
        it('should be a defined function', () => {
            expect(typeof sumArgs).toBe('function');
        })
        it('should return 6 when 1, 2, and 3 are passed in as numbers', () => {
            expect(sumArgs(1, 2, 3)).toBe(6);
        })
        it('should return false when 1, 2, and 3 are passed in as strings', () => {
            expect(sumArgs("1", "2", "3")).toBe(false);
        })
        it('should return false when any string is passed in.', () => {
            expect(sumArgs("1", 2, 3)).toBe(false);
        })
        it('should return false when any boolean is passed in.', () => {
            expect(sumArgs(true, 2, 3)).toBe(false);
        })
        it('should return 5 when 10, -2, and -3 are passed in as numbers.', () => {
            expect(sumArgs(10, -2, -3)).toBe(5);
        })
        it('should return NaN when three NaN\'s are passed in as arguments.', () => {
            expect(sumArgs(NaN, NaN, NaN)).toBeNaN();
        })
        it('should return false when [1,2], [3,4], and [5,6] are passed in as arguments.', () => {
            expect(sumArgs([1, 2], [3,4], [5,6])).toBe(false);
        })
        it('should return false when a null is passed in.', () => {
            expect(sumArgs(null, 1, 2)).toBe(false);
        })

    })

    describe('truncateString', () => {
        it('should be a defined function', () => {
            expect(typeof truncateString).toBe('function');
        })
        it('should return "hello worl" if "hello world" and 1 are passed in as arguments', () => {
            expect(truncateString("hello world", 1)).toBe("hello worl");
        })
        it('should return "super" if "superman" and 3 are passed in as arguments', () => {
            expect(truncateString("superman", 3)).toBe("super");
        })
        it('should return false if a string is not passed in passed in as the first argument', () => {
            expect(truncateString(true, 1)).toBe(false);
        })
        it('should return false if a number is not passed in passed in as the second argument', () => {
            expect(truncateString("superman", true)).toBe(false);
        })
        it('should return "tru" if "true" and 1 are passed in as arguments', () => {
            expect(truncateString("true", 1)).toBe("tru");
        })
        it('should return "" (empty string) if "texas" and 7 are passed in as arguments', () => {
            expect(truncateString("texas", 7)).toBe("");
        })
        it('should return false if "san antonio" and "texas" are passed in as arguments', () => {
            expect(truncateString("san antonio", "texas")).toBe(false);
        })
        it('should return "code" if "codeup" and 2 are passed in as arguments', () => {
            expect(truncateString("codeup", 2)).toBe("code");
        })
    })

})();
