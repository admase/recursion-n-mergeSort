/**
 * Project Merge Sort
 */

"use strict";

// 1. Write a function 'mergeSort' that takes in an array and returns a sorted array, using a recursive merge sort methodology.
function mergeSort(arr) {
    let sortedArr = [];

    if (arr.length <= 1) return arr;
    let median = Math.floor(arr.length / 2);
    let arrA = mergeSort(arr.slice(0, median));
    let arrB = mergeSort(arr.slice(median));

    while (arrA.length && arrB.length) {
        if (arrA[0] < arrB[0]) {
            sortedArr.push(arrA.shift());
        }
        else {
            sortedArr.push(arrB.shift());
        }
    }
    return [...sortedArr, ...arrA, ...arrB];
}

console.log(mergeSort([2])); // returns [2] since size is less than or equal 1
console.log(mergeSort([2, -1])); // Same as above but it returns sorted array [ -1, 2 ]
console.log(mergeSort([3, 4, 9, -1, 0, 22, 18])); // [ -1, 0, 3, 4, 9, 18, 22 ]
console.log(mergeSort([199, 173, 148, 103, 200, 88, 48])); // [ 48, 88, 103, 148, 173, 199, 200 ]