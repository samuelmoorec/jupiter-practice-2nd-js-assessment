"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 */


// Define a function named isOdd that takes in any input and returns true if the input is an odd number, return false for any other situation. You do not need to consider floating-point and decimal numbers.
function isOdd(num) {
    if (isNaN(num)) {
        return false;
    }
    return num % 2 !== 0;
}

/*console.log(isOdd(3)); // true
console.log(isOdd(2)); // false
console.log(isOdd(73)); // true
console.log(isOdd(200)); // false
console.log(isOdd("23")); // true
console.log(isOdd("20")); // false
console.log(isOdd("three")); // false
console.log(isOdd(NaN)); // false*/

// Define a function named isVowel that takes in a single character and returns true if the character is a vowel. *Not including the letter 'y'
function isVowel(char) {
    switch (char) {
        case 'a':
        case 'A':
        case 'e':
        case 'E':
        case 'i':
        case 'I':
        case 'o':
        case 'O':
        case 'u':
        case 'U':
            return true;
        default:
            return false;
    }
}

// Define a function named combineStrings that has two parameters, if both parameters are strings, then return a concatenated string of both parameters. Otherwise, return false.
function combineStrings(str1, str2) {
    if (typeof str1 === "string" && typeof str2 === "string") {
        return str1 + str2;
    }
    // return false;
}

console.log(combineStrings("Hello", "World")); // HelloWorld
console.log(typeof combineStrings("string", "string")) // "string"
console.log(combineStrings("sun", "set")); // sunset
console.log(combineStrings("Number", 1)); // false
console.log(combineStrings(true, true)); // false
console.log(combineStrings('true', 'true')); // truetrue

/*
console.log(isVowel('e')); // true
console.log(isVowel('u')); // true
console.log(isVowel('I')); // true
console.log(isVowel('Q')); // false
console.log(isVowel('Y')); // false
console.log(isVowel(1)); // false
console.log(isVowel(-1)); // false
*/


/*

/!*Define a function named isTrue that takes in any input and returns true if the input provided is exactly equal to true in value and data type.*!/
/!*isTrue(true)             // true
 isTrue(false)            // false
 isTrue(0)                // false
 isTrue(null)             // false
 isTrue("true")           // false
 isTrue("Banana")         // false
 isTrue([1, 2])           // false*!/
let isTrue = function (input) {
    switch (input) {
        case true:
            return true;
        case false:
            return false;
        default:
            return false;
    }
};
console.log("---Start isTrue----");
console.log(isTrue(true));             // true
console.log(isTrue(false));            // false
console.log(isTrue(0));                // false
console.log(isTrue(null));             // false
console.log(isTrue("true"));           // false
console.log(isTrue("Banana"));         // false
console.log(isTrue([1, 2]));           // false
console.log("---Done isTrue----");

/!*Define a function named isFalse that takes in a value and returns a true if and only if the provided input is equal to false in both type and value.

 isFalse(false)             // true
 isFalse(true)              // false
 isFalse(0)                 // false
 isFalse(null)              // false
 isFalse("")                // false
 isFalse("Banana")          // false
 isFalse([1, 2])            // false*!/
let isFalse = function (input) {
    switch (input) {
        case true:
            return false;
        case false:
            return true;
        default:
            return false;
    }
};
console.log("---Start isFalse----");
console.log(isFalse(false));             // true
console.log(isFalse(true));              // false
console.log(isFalse(0));                 // false
console.log(isFalse(null));              // false
console.log(isFalse(""));                // false
console.log(isFalse("Banana"));          // false
console.log(isFalse([1, 2]));            // false
console.log("---Done isFalse----");

/!*Define a function named not that takes in any input and returns the boolean opposite of the provided input.

 not(false)                  // true
 not(0)                      // true
 not("")                     // true
 not(null)                   // true
 not(NaN)                    // true
 not(undefined)              // true
 not(true)                   // false
 not("something")            // false
 not(Infinity)               // false
 not(123)                    // false*!/
let not = function (input) {
    // return true if it's NaN
    if (isNaN(input) && (typeof input === "number")) {
        return true;
    }// false if input is typeof string or number, and input is not "" or 0;
    else if ((typeof input === "number" && input !== 0) || ((typeof input === "string") && (input !== ""))) {
        return false;
    }// else do the switch statement
    else {
        switch (input) {
            case true:
                return false;
            case false:
            case 0:
            case "":
            case undefined:
            case null:
            default:
                return true;
        }
    }
};

console.log("---Start not----");
console.log(not(false));                  // true
console.log(not(0));                      // true
console.log(not(""));                     // true
console.log(not(null));                   // true
console.log(not(NaN));                    // true
console.log(not(undefined));              // true
console.log(not(true));                   // false
console.log(not("something"));            // false
console.log(not(Infinity));               // false
console.log(not(123));                    // false*
console.log("---Done not----");


/!*Define a function named addOne that takes in a single input. If the input is a number or a numeric string, return the value plus one.

 addOne(0)                    // 1
 addOne(2)                    // 3
 addOne(-5)                   // -4
 addOne(5.789)                // 6.789
 addOne(Infinity)             // Infinity
 addOne("2")                  // 3
 addOne("0")                  // 1
 addOne("banana")             // NaN
 addOne(true)                 // NaN
 addOne(NaN)                  // NaN*!/

let addOne = function (input) {
    return Number(input) + 1;
};

console.log("---Start addOne----");
console.log(addOne(0));                    // 1
console.log(addOne(2));                    // 3
console.log(addOne(-5));                   // -4
console.log(addOne(5.789));                // 6.789
console.log(addOne(Infinity));             // Infinity
console.log(addOne("2"));                  // 3
console.log(addOne("0"));                  // 1
console.log(addOne("banana"));             // NaN
console.log(addOne(true));                 // NaN
console.log(addOne(NaN));                  // NaN
console.log("---Done addOne----");


/!*Define a function named isEven that takes in a single input. If the input is an even number or a string containing an even number, return true. Any other input should return false for the output.

 isEven(2)                   // true
 isEven(-8)                  // true
 isEven(0)                   // true
 isEven("42")                // true
 isEven(1)                   // false
 isEven("-3")                // false
 isEven(false)               // false
 isEven("banana")            // false*!/

let isEven = function (input) {
    if (input === false) {
        return false;
    }
    return ((Number(input) % 2) === 0);
};

console.log("---Start isEven----");
console.log(isEven(2));                   // true
console.log(isEven(-8));                  // true
console.log(isEven(0));                   // true
console.log(isEven("42"));                // true
console.log(isEven(1));                   // false
console.log(isEven("-3"));                // false
console.log(isEven(false));               // false
console.log(isEven("banana"));            // false
console.log("---Done isEven----");

/!*Define a function named isIdentical that takes in two input arguments. If each input is equal both in data type and in value, then return true. If the values are not the same data type or not the same value, return false.

 isIdentical(3, 3)                     // true
 isIdentical(false, false)             // true
 isIdentical("hello", "hello")         // true
 isIdentical(3, 3.0)                   // true
 isIdentical(undefined, undefined)     // true
 isIdentical(2, "2")                   // false
 isIdentical("javascript", "java")     // false*!/

let isIdentical = function (input1, input2) {
    return (input1 === input2);
};

console.log("---Start isIdentical----");
console.log(isIdentical(3, 3));                     // true
console.log(isIdentical(false, false));             // true
console.log(isIdentical("hello", "hello"));         // true
console.log(isIdentical(3, 3.0));                   // true
console.log(isIdentical(undefined, undefined));     // true
console.log(isIdentical(2, "2"));                   // false
console.log(isIdentical("javascript", "java"));     // false
console.log("---Done isIdentical----");

/!** Define a function named isEqual that takes in two input arguments. If each argument is equal only in value, then return true. Otherwise return false.

 isEqual(3, "3")                       // true
 isEqual("abc123", "abc123")           // true
 isEqual(true, 1)                      // true
 isEqual(0, false)                     // true
 isEqual(4, -5)                        // false
 isEqual("java", "javascript")         // false*!/
let isEqual = function (input1, input2) {
    return (input1 == input2);
};

console.log("---Start isEqual----");
console.log(isEqual(3, "3"));                       // true
console.log(isEqual("abc123", "abc123"));           // true
console.log(isEqual(true, 1));                      // true
console.log(isEqual(0, false));                     // true
console.log(isEqual(4, -5));                        // false
console.log(isEqual("java", "javascript"));         // false
console.log("---Done isEqual----");

/!*Define a function named or that takes in two input arguments. The output returned should be the result of an or operation on both inputs.

 or(true, true)                    // true
 or(true, false)                   // true
 or(false, true)                   // true
 or(false, false)                  // false
 or("hello", "world")              // "hello" (this behavior is non-obvious, research more!)*!/
let or = function (input1, input2) {
    return (input1 || input2);
};

console.log("---Start or----");
console.log(or(true, true));                    // true
console.log(or(true, false));                   // true
console.log(or(false, true));                   // true
console.log(or(false, false));                  // false
console.log(or("hello", "world"));              // "hello" (this behavior is non-obvious, research more!)
console.log("---Done or----");

/!*Define a function named and that takes in two input arguments and returns the result of a logical and operation of both inputs.

 and(true, true)                    // true
 and(true, false)                   // false
 and(false, true)                   // false
 and(false, false)                  // false
 and("hello", "world")              // "world" (this behavior is non-obvious, research more)*!/

let and = function (input1, input2) {
    return (input1 && input2);
};

console.log("---Start and----");
console.log(and(true, true));                    // true
console.log(and(true, false));                   // false
console.log(and(false, true));                   // false
console.log(and(false, false));                  // false
console.log(and("hello", "world"));              // "world" (this behavior is non-obvious, research more)*!/
console.log("---Done and----");

/!*Define a function named concat that takes in two input arguments. If both arguments are strings, then return the concatenated result. If two numbers are provided, then return the string concatenation of each set of numerals.

concat("code", "up")                // "codeup"
concat("connect", 4)                // "connect4"
concat("hello", "world")            // "helloworld"
concat(4, 2)                        // "42"
concat(true, true)                  // "truetrue"*!/
// let concat = function (input1, input2) {
//     return input1.toString() + input2.toString();
// };

console.log("---Start concat----");
console.log(concat("code", "up"));                // "codeup"
console.log(concat("connect", 4));                // "connect4"
console.log(concat("hello", "world"));            // "helloworld"
console.log(concat(4, 2));                        // "42"
console.log(concat(true, true));                  // "truetrue"
console.log("---Done concat----");

*/
