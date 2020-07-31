// --------------------------- //
//       Space Complexity      //
// --------------------------- //

'use strict';

/**
 * Space complexity is a parallel concept to time complexity.
 *
 * When considering the space complexity of a function,
 * you only take into account calls that are simultaneously added to the call stack.
 */

/**
 * O(1) - Constant Space
 *
 * @param {int} a - integer value
 * @param {int} b - integer value
 * @return {int} - sum of values a and b
 */
function sumInt(a, b) {
    return a + b;
}

/**
 * O(n) - Linear Space
 *
 * @param {int} size - size of array
 * @return {array} arr - array of requested size
 */
function buildArray(size) {
    const arr = [];
    let counter = 1;

    while (counter <= size) {
        arr.push(counter);
        counter++;
    }

    return arr;
}

/**
 * O(n²) - Quadratic Space
 *
 * @param {int} size - desired 2-dimensional size
 * @return {array} - 2-dimensional array of desired size (e.g. size = 3 will return a 3x3 array)
 */
function build2DArray(size) {
    const arr = [];

    for (let i = 0; i < size; i++) {
        arr.push(buildArray(size));
    }

    return arr;
}
