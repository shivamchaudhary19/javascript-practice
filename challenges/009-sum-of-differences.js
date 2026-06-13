/*
Problem: Sum of Differences

Given an array of numbers, calculate the sum of the differences between
each element and the element that follows it.

Example:
Input: [1, 3, 4]
Calculation: (3 - 1) + (4 - 3)
Output: 3

Concepts:
- Arrays
- Loops
- Array Traversal
- Arithmetic Operations
- Functions

Source: FreeCodeCamp
*/


function sumOfDifferences(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        sum += arr[i + 1] - arr[i];
    }

    return sum;
}