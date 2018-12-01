// --------------------------- //
//       Time Complexity       //
// --------------------------- //

'use strict';

/**
 * Test Data
 */
const testArray = [9, 2, 5, 6, 4, 3, 7, 12, 12, 10, 1, 8, 38, 27, 0];


/**
 * O(1) - Constant Time
 *
 * Time complexity will always remain constant reagardless of input.
 *
 * @param {array} arr - array of items
 * @param {int} i - index of an item
 * @return {int} - number at given index i
 */
function getItem(arr, i) {
    return arr[i];
}

/**
 * O(n) - Linear Time
 *
 * Time complexity grows as the number of items that needs to be iterated over grows.
 *
 * @param {array} arr - array of items
 * @param {int} n - numerical element in an array
 * @return {int} - index of given number n
 */
function getItemIndex(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == n) {
            return i;
        }
    }
}

/**
 * O(n²) - Quadratic Time
 *
 * Time complexity grows exponentially as the input grows.
 * 2 nested loops result in O(n²), 3 nested loops result in O(n³), etc.
 *
 * @param {array} arr - array of integers
 * @return {array} - array sorted in ascending order
 */
function bubbleSortArray(arr) {

    // outer loop
    for (let i = 0; i < arr.length; i++) {

        // inner loop -- causes exponential growth of time complexity
        for (let j = 1; j < arr.length; j++) {
            const jLeft = j - 1;

            // swap element at index j with element to its left if left element is larger
            if (arr[jLeft] > arr[j]) {
                const temp = arr[jLeft];
                arr[jLeft] = arr[j];
                arr[j] = temp;
            }
        }
    }

    // series of swaps will have caused the lower integers to bubble to the front
    return arr;
}

/**
 * O(2ⁿ) - Exponential Time
 *
 * Time complexity doubles with each addition to the input data set.
 *
 * @param {int} i - index of value in fibonacci sequence array
 * @return {int} - fibonacci sequence value
 */
function fibonacci(i) {
    if (i <=1) return 1;

    // there are iterative solutions with better time complexity, but this is an example of O(2ⁿ)
    return fibonacci(i - 1) + fibonacci(i - 2);
}




// TODO
// O(log n)
// O(n log n)
