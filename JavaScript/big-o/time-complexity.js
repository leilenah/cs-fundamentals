// --------------------------- //
//       Time Complexity       //
// --------------------------- //

'use strict';

/**
 * Test Data
 */
const unsortedArray = [9, 2, 5, 6, 4, 3, 7, 12, 10, 1, 8, 38, 0, 58, 10, 12];
const sortedArray = [0, 1, 3, 4, 5, 6, 7, 8, 10, 11, 12, 14, 15, 17, 19, 20]


/**
 * O(1) - Constant Time
 *
 * Steps to completion will always remain constant reagardless of input.
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
 * Steps to completion grows proportionally as the input grows.
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
 * Steps to completion grows exponentially as the input grows.
 * E.g. 2 nested loops result in O(n²), 3 nested loops result in O(n³), etc.
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
 * Steps to completion doubles with each addition to the input data set.
 *
 * @param {int} i - index of value in fibonacci sequence array
 * @return {int} - fibonacci sequence value
 */
function fibonacci(i) {
    if (i <=1) return 1;

    // there are iterative solutions with better time complexity, but this is an example of O(2ⁿ)
    return fibonacci(i - 1) + fibonacci(i - 2);
}

/**
 * O(log n) - Logarithmic Time
 *
 * Steps to completion are decreased by some factor with each step.
 *
 * @param {array} arr - array of sorted items
 * @param {int} n - value of element in sorted array
 * @return {int} - index of value in sorted array
 */

function binarySearch(arr, n) {
    let lowIndex = 0,
        highIndex = arr.length - 1,
        midIndex;

    // iterate over the array until we find the item, or until there is only 1 item left to check
    while (lowIndex <= highIndex) {

        // use Math.ceil() to ensure that midIndex is not a floating point number
        midIndex = Math.ceil((lowIndex + highIndex) / 2);

        // steps to comletion are halved each time we adjust high or low index
        if (arr[midIndex] > n) {
            highIndex = midIndex - 1;
        } else if (arr[midIndex] < n) {
            lowIndex = midIndex + 1;
        } else {
            return midIndex;
        }
    }

    // let the user know if n isn't present in arr
    console.log(n + ' is not in the array.');
}

/**
 * O(n log n) - Quasilinear Time
 *
 * Number of operations is determined by n, and each of those operations has O(log n) time complexity.
 *
 * @param {array} arr - array of unsorted items
 * @return {array} - array of sorted items
 */
function mergeSort(arr) {
    if (arr.length == 1) {
        return arr;
    }

    // split the array into two sections
    const middleIndex = Math.floor(arr.length / 2),
          leftArray = arr.slice(0, middleIndex),
          rightArray = arr.slice(middleIndex);

    // merge helper with merge and sort the left and right sides
    return merge(mergeSort(leftArray), mergeSort(rightArray));
}


function merge(leftArray, rightArray) {
    let mergedArray = [],
        leftoverArray = [],
        leftIndex = 0,
        rightIndex = 0;

    // compare the left array to the right array one index at a time
    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {

        // if element in the left array is smaller, push it into our merged array
        if (leftArray[leftIndex] < rightArray[rightIndex]) {
            mergedArray.push(leftArray[leftIndex])
            leftIndex++

        // if element in the right array is smaller, push it into our merged array
        } else {
            mergedArray.push(rightArray[rightIndex]);
            rightIndex++
        }
    }

    // combine the leftover values from the left array and right array into one
    leftoverArray = leftArray.slice(leftIndex).concat(rightArray.slice(rightIndex));

    // return the merged + leftover array
    return mergedArray.concat(leftoverArray);
}
