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
console.log(isOdd(NaN)); // false
console.log(isOdd(null)); // false
console.log(isOdd(0)); // false*/

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

/*console.log(isVowel('e')); // true
console.log(isVowel('u')); // true
console.log(isVowel('I')); // true
console.log(isVowel('Q')); // false
console.log(isVowel('Y')); // false
console.log(isVowel(1)); // false
console.log(isVowel(-1)); // false
console.log(isVowel(null)); // false
console.log(isVowel("hello")); // false*/


// Define a function named combineStrings that takes in two parameters, if both parameters are strings, then return a concatenated string of both parameters. Otherwise, return false.
function combineStrings(str1, str2) {
    if (typeof str1 === "string" && typeof str2 === "string") {
        return str1 + str2;
    }
    return false;
}

/*
console.log(combineStrings("Hello", "World")); // HelloWorld
console.log(typeof combineStrings("string", "string")) // "string"
console.log(combineStrings("sun", "set")); // sunset
console.log(combineStrings("Number", 1)); // false
console.log(combineStrings(true, true)); // false
console.log(combineStrings('true', 'true')); // truetrue
*/

// Define a function named sumArgs that takes in three parameters, if they are numbers then add them together. Otherwise return false.

function sumArgs(num1, num2, num3) {
    if (typeof num1 === "number" && typeof num2 === "number" && typeof num3 === "number") {
        return num1 + num2 + num3;
    }
    return false;
}

/*console.log(sumArgs(1, 2, 3)); // 6
console.log(sumArgs("1", "2", "3")); // false
console.log(sumArgs("1", 2, 3)); // false
console.log(sumArgs(true, 2, 3)); // false
console.log(sumArgs(10, -2, -3)); // 5
console.log(sumArgs(NaN, NaN, NaN)); // NaN
console.log(sumArgs([1, 2], [3,4], [5,6])); // false
console.log(sumArgs(null, 1, 2)) // false*/

// Define a function named truncateString that takes in a string as the first parameter and a number as the second parameter. Truncate (shorten) the string by the length based on the argument passed in. For example, truncateString("hello world",1) would return "hello worl"
function truncateString(str, length) {
    if (typeof str !== "string" || typeof length !== "number") {
        return false;
    }
    return str.slice(0, -length);
}

/*
console.log(truncateString("hello world", 1)); // "hello worl"
console.log(truncateString("superman", 3)); // "super"
console.log(truncateString(true, 1)); // false
console.log(truncateString("superman", true)); // false
console.log(truncateString("true", 1)) // "tru"
console.log(truncateString("texas", 7)); // "" (empty string)
console.log(truncateString("san antonio", "texas")); // false
console.log(truncateString("codeup", 2)); // code
*/
