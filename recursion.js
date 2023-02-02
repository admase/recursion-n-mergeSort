/**
 * Project Recursion
 */

"use strict";

// 1. Write a function 'fibs' which takes a number and returns an array containing that many numbers from the fabonacci sequence.
// Example: Input of '8', this method should return the array [0, 1, 1, 2, 3. 5. 8. 13].

const fibs = (num) => {
    let n1 = 0;
    let n2 = 1;
    let n3;
    const arr = [];
    for (var i = 1; i <= num; i++) {
        arr.push(n1);
        console.log("Fibonacci sequence for #" + i + " is: " + arr);
        n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
    }
}

fibs(8); // returns the fibonacci sequence for each number up to the nth number (example: [0, 1, 1, 2, 3, 5, 8, 13]);


// 2. Write another method 'fibsRec' which solves the same problem recursively.
const fibsRec = (num) => {
    return num === 1 ? [0] : num === 2 ? [0, 1] : [...fibsRec(num - 1), fibsRec(num - 1)[num - 2] + fibsRec(num - 1)[num - 3]];
}

console.log(fibsRec(1)); // returns [0];
console.log(fibsRec(2)); // returns [0,1];
console.log(fibsRec(3)); // returns [0,1,1];
console.log(fibsRec(5)); // returns [0,1,1,2,3];
console.log(fibsRec(8)); // returns [0,1,1,2,3,5,8,13];