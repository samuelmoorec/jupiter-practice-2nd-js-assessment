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
    })

    describe('or', () => {
        it('should be a defined function', () => {
            expect(typeof or).toBe('function')
        })
        it('should return true when passed true and true', () => {
            expect(or(true, true)).toBe(true);
        })
        it('should return true when passed true and one false as inputs', () => {
            expect(or(true, false)).toBe(true)
        })
        it('should return false when passed two false values', () => {
            expect(or(false, false)).toBe(false)
        })
        it('should return "hello" when passed the inputs "hello" and "world" in that order', () => {
            expect(or("hello", "world")).toBe("hello")
        })
    })

    describe('isEqual', () => {
        it('should be a defined function', () => {
            expect(typeof isEqual).toBe('function');
        })
        it('should return a boolean value', () => {
            expect(typeof isEqual(randomNumber, randomNumber)).toBe('boolean')
        })
        it('should return true when passed 2 and "2" as inputs since they are equal in value', () => {
            expect(isEqual(2, "2")).toBe(true)
        })
        it('should return true when passed "3.6" and 3.6 as inputs, since they have the same value', () => {
            expect(isEqual(3.6, "3.6")).toBe(true)
        })
        it('should return true when passed true and 1, since == performs type coersion', () => {
            expect(isEqual(true, 1)).toBe(true)
        })
        it('should return true when passed 0 and false, since == performs type coersion', () => {
            expect(isEqual(0, false)).toBe(true)
        })
        it('should return false when passed "java" and "javascript" as inputs, since they are not equal in value', () => {
            expect(isEqual("java", "javascript")).toBe(false)
        })
        it('should return false when passed -4 and 5 as inputs', () => {
            expect(isEqual(-4, 5)).toBe(false)
        })
    })

    describe('isIdentical', () => {
        it('should be a defined function', () => {
            expect(typeof isIdentical).toBe('function');
        })
        it('should return a boolean value when called with a random number and random boolean since they are not the same data type or value', () => {
            expect(isIdentical(randomNumber, randomBoolean)).toBe(false)
        })
        it('should return true when passed ' + randomNumber + ' and ' + randomNumber, () => {
            expect(isIdentical(randomNumber, randomNumber)).toBe(true)
        })
        it('should return true when passed ' + randomBoolean + ' and ' + randomBoolean, () => {
            expect(isIdentical(randomBoolean, randomBoolean)).toBe(true)
        })
        it('should return false when passed 2 and "5", since they are not the same value and not the same data type', () => {
            expect(isIdentical(2, "5")).toBe(false)
        })
        it('should return false when passed "3" and 3, since they are not the same data type', () => {
            expect(isIdentical("3", 3)).toBe(false)
        })
    })

    describe('isEven', () => {
        it('should be a defined function', () => {
            expect(typeof isEven).toBe('function');
        })
        it('should return a boolean value when passed any number', () => {
            expect(typeof isEven(randomNumber)).toBe('boolean')
        })
        it('should return true when passed 2', () => {
            expect(isEven(2)).toBe(true)
        })
        it('should return true when passed -4', () => {
            expect(isEven(-4)).toBe(true)
        })
        it('should return true when passed "8"', () => {
            expect(isEven("8")).toBe(true)
        })
        it('should return true when passed 0', () => {
            expect(isEven(0)).toBe(true)
        })
        it('should return false when passed the number 3', () => {
            expect(isEven(3)).toBe(false)
        })
        it('should return false when passed a non-numeric string like "banana"', () => {
            expect(isEven("banana")).toBe(false)
        })
        it('should return false when passed the boolean value ' + randomBoolean, () => {
            expect(isEven(randomBoolean)).toBe(false)
        })
    })

    describe('addOne', () => {
        it('should be a defined function', () => {
            expect(typeof addOne).toBe('function');
        })
        it('should return a number when passed a number', () => {
            expect(addOne(randomNumber)).toBe(randomNumber + 1)
        })
        it('should return -4 when passed "-5"', () => {
            expect(addOne("-5")).toBe(-4)
        })
        it('should return Infinity when passed Infinity', () => {
            expect(addOne(Infinity)).toBe(Infinity)
        })
        it('should return 1 when passed "0"', () => {
            expect(addOne("0")).toBe(1)
        })
    })

    describe('isFalse', () => {
        it('should be a defined function', () => {
            expect(typeof isFalse).toBe('function');
        })
        it('should return a boolean when passed any value', () => {
            expect(typeof isFalse(randomBoolean)).toBe('boolean')
        })
        it('should return true when passed the value of false', () => {
            expect(isFalse(false)).toBe(true)
        })
        it('should return false when passed true', () => {
            expect(isFalse(true)).toBe(false)
        })
        it('should return false when passed undefined', () => {
            expect(isFalse(undefined)).toBe(false)
        })
        it('should return false when passed null', () => {
            expect(isFalse(null)).toBe(false)
        })
        it('should return false when passed the number ' + randomNumber, () => {
            expect(isFalse(randomNumber)).toBe(false)
        })
        it('should return false when passed any string', () => {
            expect(isFalse("hello world")).toBe(false)
        })
    })

    describe('not', () => {
        it('should be a defined function', () => {
            expect(typeof not).toBe('function');
        })
        it('should return true when passed false', () => {
            expect(not(false)).toBe(true)
        })
        it('should return true when passed null', () => {
            expect(not(null)).toBe(true)
        })
        it('should return true when passed 0', () => {
            expect(not(0)).toBe(true) })
        it('should return true when passed undefined', () => {
            expect(not(undefined)).toBe(true)
        })
        it('should return false when passed 5', () => {
            expect(not(5)).toBe(false)
        })
        it('should return true when passed NaN', () => {
            expect(not(NaN)).toBe(true)
        })
        it('should return true when passed the empty string ""', () => {
            expect(not("")).toBe(true)
        })
        it('should return false when passed true', () => {
            expect(not(true)).toBe(false)
        })
        it('should return false when passed the string "hello"', () => {
            expect(not("hello")).toBe(false)
        })
        it('should return false when passed the number 123', () => {
            expect(not(123)).toBe(false)
        })
    })



    describe('isTrue', () => {
        it('should be a defined function', () => {
            expect(typeof isTrue).toBe('function')
        })
        it('should return a boolean value', () => {
            expect(typeof isTrue(randomBoolean)).toBe('boolean')
        })
        it('should return true when passed the boolean true', () => {
            expect(isTrue(true)).toBe(true)
        })
        it('should return false when passed the boolean false as the input', () => {
            expect(isTrue(false)).toBe(false)
        })
        it('should return false when passed a number as the input', () => {
            expect(isTrue(randomNumber)).toBe(false);
        })
        it('should return false when passed a string as input', () => {
            expect(isTrue("hello world")).toBe(false);
        })
    })

})();
