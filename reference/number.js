/**
 * Number Methods
 *
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
 */

/**
 * Number.isInteger()
 *
 * Return true if a number is an integer (not a floating-point).
 * Return false if a number is not an integer.
 */

const isInteger = Number.isInteger(1.444);
console.log(isInteger);

/**
 * Number.parseInt()
 *
 * Parses a string and returns an integer.
 * Same as global parseInt().
 */
const integer = Number.parseInt("3");
console.log(integer);
