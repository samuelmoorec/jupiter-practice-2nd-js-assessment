(function () {

    "use strict";

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
            expect(sumArgs([1, 2], [3, 4], [5, 6])).toBe(false);
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

    describe('reverseSign', () => {
        it('should be a defined function', () => {
            expect(typeof reverseSign).toBe('function');
        })
        it('should return a number', () => {
            expect(typeof reverseSign(1)).toBe('number');
        })
        it('should return 1 when passed the number -1', () => {
            expect(reverseSign(-1)).toBe(1);
        })
        it('should return -1 when passed the number 1', () => {
            expect(reverseSign(1)).toBe(-1);
        })
        it('should return -1 when passed the numeric string "1"', () => {
            expect(reverseSign("1")).toBe(-1);
        })
        it('should return false when no arguments are passed', () => {
            expect(reverseSign()).toBe(false);
        })
        it('should return false when the argument is NOT a number', () => {
            expect(reverseSign("")).toBe(false);
            expect(reverseSign(true)).toBe(false);
            expect(reverseSign([])).toBe(false);
            expect(reverseSign({})).toBe(false);
        })
    })

    describe('makeUppercase', () => {
        it('should be a defined function', () => {
            expect(typeof makeUppercase).toBe('function');
        })
        it('should return "AAAA" when "aaaa" is passed', () => {
            expect(makeUppercase('aaaa')).toBe('AAAA');
        })
        it('should return "BBBB" when "bBbB" is passed', () => {
            expect(makeUppercase('bBbB')).toBe('BBBB');
        })
        it('should return "CCCC" when "CCCC" is passed', () => {
            expect(makeUppercase('CCCC')).toBe('CCCC');
        })
        it('should return false when no arguments are passed', () => {
            expect(makeUppercase()).toBe(false);
        })
        it('should return false when the argument is a numeric string', () => {
            expect(makeUppercase("123")).toBe(false);
        })
        it('should return false when the argument is NOT a string', () => {
            expect(makeUppercase(100)).toBe(false);
            expect(makeUppercase(true)).toBe(false);
            expect(makeUppercase([])).toBe(false);
            expect(makeUppercase({})).toBe(false);
        })
    })

    describe('isMultiple', () => {
        it('should be a defined function', () => {
            expect(typeof isMultiple).toBe('function');
        })
        it('should return true when 2 & 6 are passed', () => {
            expect(isMultiple(2, 6)).toBe(true);
        })
        it('should return true when 13 & 26 are passed', () => {
            expect(isMultiple(13, 26)).toBe(true);
        })
        it('should return false when 5 & 13 are passed', () => {
            expect(isMultiple(5, 13)).toBe(false);
        })
        it('should return false when both arguments are the same', () => {
            expect(isMultiple(1, 1)).toBe(false);
        })
        it('should return false when no arguments are passed', () => {
            expect(isMultiple()).toBe(false);
        })
    })

    describe('canPurchase', () => {
        it('should be a defined function', () => {
            expect(typeof canPurchase).toBe('function');
        })
        it('should return true when availableCash > billAmount', () => {
            expect(canPurchase(100, 250)).toBe(true);
        })
        it('should return false when availableCash < billAmount', () => {
            expect(canPurchase(100, 90)).toBe(false);
        })
        it('should return false when no arguments are passed', () => {
            expect(canPurchase()).toBe(false);
        })
    })

    describe('getInitials', () => {
        it('should be a defined function', () => {
            expect(typeof getInitials).toBe('function')
        })
        it('should return "D.F." when "Daniel" & "Fryar" are passed', () => {
            expect(getInitials('Daniel', 'Fryar')).toBe('D.F.');
        })
        it('should return "D.S." when "David" & "Stephens" are passed', () => {
            expect(getInitials('David', 'Stephens')).toBe('D.S.');
        })
        it('should return "H.L." when "Hung" & "Ly" are passed', () => {
            expect(getInitials('Hung', 'Ly')).toBe('H.L.');
        })
        it('should return "T.C." when "Tristan" & "Crawford" are passed', () => {
            expect(getInitials('Tristan', 'Crawford')).toBe('T.C.');
        })
        it('should return false when no arguments are passed', () => {
            expect(getInitials()).toBe(false);
        })
        it('should return false when numbers are passed', () => {
            expect(getInitials(1, 2)).toBe(false);
        })
        it('should return false when numeric strings are passed', () => {
            expect(getInitials("3", "4")).toBe(false);
        })
        it('should return false when empty strings are passed', () => {
            expect(getInitials("", "")).toBe(false);
        })
    })
})();
