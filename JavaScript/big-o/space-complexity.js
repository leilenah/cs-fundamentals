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
 * O(n) - Linear Space
 *
 * @param {int} size - size of array
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


console.log(buildArray(3));



