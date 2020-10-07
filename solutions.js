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


//TODO: Define a function named isOdd that takes in any input and returns true if the input is an odd number, return false for any other situation. You do not need to consider floating-point and decimal numbers.
function isOdd(number) {
    return number % 2 === 1;
}

// //TODO: Define a function named isVowel that takes in a single character and returns true if the character is a vowel. *Not including the letter 'y'
function isVowel(arg) {
    if (arg === "a" || arg === "e" ||arg === "i" ||arg === "o" ||arg === "u" || arg === "A" || arg === "E" ||arg === "I" ||arg === "O" ||arg === "U"){
        return true
    }else{ return false}
}

// function isVowel(char) {
//     let vowels = 'aeiouAEIOU';
//     return typeof(char) === 'string' && char.length === 1 && vowels.includes(char);
// }

//TODO: Define a function named combineStrings that takes in two parameters, if both parameters are strings, then return a concatenated string of both parameters. Otherwise, return false.

function combineStrings(arg1,arg2) {
    if(typeof arg2 === "string" && typeof arg1 === "string") {
        return arg1 + arg2
    }
    return false;
}


//TODO: Define a function named sumArgs that takes in three parameters, if they are numbers then add them together. Otherwise return false.

function sumArgs(num1,num2,num3) {
    if (typeof num1 === "number" && typeof num2 === "number" && typeof num3 === "number"){
        return num1 + num2 + num3;
    }
    return false;
}

//TODO: Define a function named truncateString that takes in a string as the first parameter and a number as the second parameter. Truncate (shorten) the string by the length based on the argument passed in. For example, truncateString("hello world",1) would return "hello worl"

function truncateString(str,num) {
    // if (typeof num === "number" && typeof str === "string"){
    //     if (num >= str.length){
    //         return "";
    //     }
    //     return str.slice(0,str.length - num);
    // }else{
    //     return false
    // }

    if (typeof str === "string" && typeof num === "number"){
        return str.substring(0,str.length - num);
    }else{
        return false;
    }
}

//TODO: Define a function named `reverseSign` that takes in a number as the first parameter. Reverse the sign of the argument passed in, return false if the argument is not a number. For example, `reverseSign(1)` would return `-1`.
// function reverseSign(arg) {
//     if (typeof arg !== "number"){
//         return false;
//     }else if(Number(arg)){
//         return arg * -1
//     }else{
//         return false;
//     }
// }
function reverseSign(num) {
    if (num === "" || typeof num === "boolean" || typeof num === "object") {
        return false;
    } else if(!isNaN(num)) {
        return num * -1;
    } else {
        return false;
    }
}



//TODO: Define a function named `makeUppercase` that takes in a string as the first parameter. Return the argument passed in entirely uppercased, return false if the argument is not a string. For example, `makeUppercase("test")` would return `"TEST"`.
function makeUppercase(str) {
    if (typeof str === "string" && isNaN(str)){
        return str.toUpperCase();
    }else{
        return false;
    }
}

//TODO: Define a function named `isMultiple` that takes in two `number` parameters. Return `true` if one argument is a multiple of the other, `false` otherwise. For example, `isMultiple(2, 6)` would return `true`.
function isMultiple(num1,num2) {
    if (num2 === num1){
        return false
    }else return num2 % num1 === 0;

}

//TODO: Define a function named `canPurchase` that takes in two `number` parameters, `billAmount` & `availableCash`. Return `true` if `availableCash` is greater than `billAmount`, `false` otherwise. For example, `canPurchase(10, 20)` would return `true`.

function canPurchase(bill,a) {
    if( a > bill){
        return true
    }else{
        return false
    }
}
//TODO: Define a function named `getInitials` that takes in two `string` parameters, `first` & `last`. Return the names combined and formatted as initials, return `false` if either parameter is invalid. For example, `getInitials("John", "Snow")` would return `"J.S."`

function getInitials(first_name,last_name) {
    if (typeof first_name === "string" && typeof last_name === "string" && isNaN(first_name) && first_name !== ""){
        return first_name.substring(0,1) + "." + last_name.substring(0,1) + ".";
    }else return false;
}