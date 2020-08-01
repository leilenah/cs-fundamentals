/**
 * Math Methods
 *
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */

/**
 * Math.round()
 *
 * Returns a number rounded to the nearest integer.
 */
const rounded = Math.round(1.78);
console.log(rounded);


/**
 * Math.ceil()
 *
 * Rounds a number up to the next largest integer.
 */
const ceil = Math.ceil(.92);
console.log(ceil);


/**
 * Math.floor()
 *
 * Rounds a numnber doown to the next largest integer.
 */
const floor = Math.floor(5.66);
console.log(floor);


/**
 * Math.max()
 *
 * Returns the max number out of x given numbers.
 * Does not take an array (spread the array to use it).
 */
const array = [1, 2, 4, 66, 202, 29];
const max = Math.max(...array);
console.log(max);


/**
 * Math.min()
 *
 * Returns the min number out of x given numbers.
 * Does not take an array (spread the array to use it).
 */
const array = [1, 2, 4, 66, 202, -29, 0];
const min = Math.min(...array);
console.log(min);


/**
 * Math.random()
 *
 * Returns a random number between 0 and 1 (excluding 1).
 * Returns a floating-point number.
 */
const random = Math.random();
console.log(random);
