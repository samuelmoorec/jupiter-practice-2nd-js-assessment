➢ Additional JS Assessment Practice
=================

This project is intended as an additional resource on top of the Javascript assessment practice.


## Setup Instructions
- If you want more practice working with Git and Github, fork this project on GitHub and then clone your fork to your development box, so you have both your own local copy and a remote in GitHub where you can push your solutions.

## Getting Started
0. Setup your own copy of the code using the instructions above
1. Read the exercise prompts listed below
2. Define your functions that solve the prompts inside of `solutions.js`.


## Exercises 👟
 The comments to the right of the function call example demonstrate the output of the function's operation on the provided input(s). Add your function definitions to `solutions.js`. Refresh `index.html` to run automated tests for feedback on your solutions.

1. Define a function named `isOdd` that takes in any input and returns `true` if the input is an odd number, return `false` for any other situation. You do not need to consider floating-point and decimal numbers.
        
        isOdd(3)                               // true
        isOdd(2)                               // false
        isOdd(73)                              // true
        isOdd(200)                             // false
        isOdd("23")                            // true
        isOdd("20")                            // false
        isOdd("three")                         // false
        isOdd(NaN)                             // false
        isOdd(null)                            // false
        isOdd(0)                               // false

2. Define a function named `isVowel` that takes in a single character and returns `true` if the character is a vowel. *Not including the letter 'y' & 'Y'.
        
        isVowel('e')                           // true
        isVowel('u')                           // true
        isVowel('I')                           // true
        isVowel('Q')                           // false
        isVowel('Y')                           // false
        isVowel(1)                             // false
        isVowel(-1)                            // false
        isVowel(null)                          // false
        isVowel("hello")                       // false

3. Define a function named `combineStrings` that takes in two parameters, if both parameters are strings, then return a concatenated string of both parameters. Otherwise, return `false`.
        
        combineStrings("Hello", "World")       // HelloWorld
        combineStrings("sun", "set")           // sunset
        combineStrings("Number", 1)            // false
        combineStrings(true, true)             // false
        combineStrings('true', 'true')         // truetrue

4. Define a function named `sumArgs` that takes in three parameters, if they are numbers then add them together. Otherwise return `false`.

       sumArgs(1, 2, 3)                        // 6
       sumArgs("1", "2", "3")                  // false
       sumArgs("1", 2, 3)                      // false
       sumArgs(true, 2, 3)                     // false
       sumArgs(10, -2, -3)                     // 5
       sumArgs(NaN, NaN, NaN)                  // NaN
       sumArgs([1, 2], [3,4], [5,6])           // false
       sumArgs(null, 1, 2                      // false
        
5. Define a function named `truncateString` that takes in a string as the first parameter and a number as the second parameter. Truncate (shorten) the string by the length based on the argument passed in. For example, truncateString("hello world",1) would return "hello worl"
        
        truncateString("hello world", 1)        // "hello worl"
        truncateString("superman", 3)           // "super"
        truncateString(true, 1)                 // false
        truncateString("superman", true)        // false
        truncateString("true", 1                // "tru"
        truncateString("texas", 7)              // "" (empty string)
        truncateString("san antonio", "texas")  // false
        truncateString("codeup", 2)             // code

6. 
        
## Files in this project
- `index.html` shows the ouptut from automated test data
- `solutions.js` is where you will write your function definitions that solve the exercises below
- `tests.js` is the suite of automated tests that call your functions in `solutions.js` with different inputs.


## Hints

Consider this example problem.

> Write a function called `isBoolean` that takes in a value and returns a boolean if the argument provided is a boolean value or not.
>

- `isBoolean("Dog")` should return `false` because a string is not a boolean
- `isBoolean(false)` should return `true` because only true and false are boolean values.

- When a problem says `return`, it means `return`, not `console.log`.

- When a problem says that a function will take in an input, then it means the function must be defined so that it takes in an argument as its input, rather than relying on variables defined outside the function.

The following example is incorrect because the function does not take in an argument. It's modifying a global variable, and that is not the same as accepting an input as an argument.

```js
var input = "Grace Hopper"
function isBoolean() {
    return typeof input == "boolean";
}
```

This is incorrect because the function doesn't return the output. Functions that do not have an explicit `return` statement return `undefined` by default.

```js
function isBoolean(input) {
    console.log(typeof input == 'boolean');
}
```

Correct solution:

```js
function isBoolean(input) {
    return typeof input == "boolean";
}
```


## About
- Testing framework: <a href="https://github.com/jasmine/jasmine">Jasmine</a>
- Made by [Hung Ly & Tristan Crawford]
-------------------
