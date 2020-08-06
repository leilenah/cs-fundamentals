/**
 * Modifying Arrays
 *
 * How to Manipulate Arrays in JavaScript: https://www.freecodecamp.org/news/manipulating-arrays-in-javascript/
 * JavaScript Array Methods: https://www.w3schools.com/js/js_array_methods.asp
 *
 * Press F8 to run code snippets.
 */

const intList = [4, 5, 6, 7, 8, 8, 33, 6, 456, 7, 885, 5435, 4534, -33];
const smallIntList = [1, 1, 1, 1, 1, 1, 1] // 7
const strList = ['hello', 'hello', 'darkness', 'my', 'my', 'my', 'old', 'friend'];
const str = 'hellodarkness darknessmy oldfriend';


/**
 * reverse()
 *
 * Reverse elements in an array.
 */
strList.sort(); // first sort
strList.reverse(); // then reverse
console.log(strList);


/**
 * sort()
 * sort(comparisonFunction)
 *
 * Sort an array alphabetically (default).
 * Sort an array numerically (using comparison function).
 * Modifies the original array.
 */
strList.sort();

intList.sort((a, b) => {
  return a - b; // ascending sort
});

intList.sort((a, b) => {
  return b - a; // descending sort
});

console.log(intList);


/**
 * find()
 *
 * Return the first item in the array that passes a certain criteria.
 * The rest of the array will not be checked.
 *
 * If you need all items in an array to be checked, find() would not be a good solution.
 */

const greaterThan8 = intList.find((item, i) => {
  return item > 8;
});
console.log(greaterThan8);


/**
 * includes()
 *
 * Check if an array contains a specific item.
 */
const hasHello = strList.includes('hello');
console.log(hasHello);


/**
 * some()
 *
 * Check if at least one item in an array passes a certain criteria.
 * Return true or false.
 */
const has33 = intList.some((item, i) => {
  return item === (31 + 1);
});
console.log(has33);


/**
 * every()
 *
 * Check if all items in an array pass the specified condition.
 *
 * Return true if all elements pass.
 * Return false if one or more elements fail.
 */

const allPositive = intList.every((item, i) => {
  return item >= 0;
});
console.log(allPositive);


/**
 * forEach()
 *
 * Call a function for each item in an array.
 * The original array is not modified.
 *
 * A new array is not returned (returns undefined).
 */
strList.forEach((item, i) => {
  console.log(item);
});


/**
 * reduce()
 * reduce(accumulator, currentItem, itemIndex)
 *
 * Reduce an array to a single value.
 * Reduce keeps track of an accumulator.
 *
 * Original array is not modified.
 */

const total = smallIntList.reduce((accumulator, item, i) => {
  console.log(accumulator)
  return accumulator + item;
});
console.log(total); // 7


/**
 * map()
 *
 * Create a new array by looping through an array and manipulating each value.
 * Does not modify the original array.
 *
 * Returns the new array.
 */
const mappedList = strList.map((item, i) => {
  return `${item}123`;
});
console.log(mappedList);


/**
 * filter()
 *
 * Create a new array if each item in an array passes a certain condition.
 * Return true or false.
 */
const filteredArray = intList.filter((item, i) => {
  if (item < 100) {
    return true;
  }

  return false; // not needed if returning false, but needed if returning true
});
console.log(filteredArray);


/**
 * indexOf(item)
 *
 * Returns the first index of an item in an array.
 */
const friendIndex = strList.indexOf('friend');
console.log(friendIndex);


/**
 * lastIndexOf(item)
 *
 * Return the last index of an item in an array.
 */
const lastMyIndex = strList.lastIndexOf('my');
console.log(lastMyIndex);


/**
 * split()
 * split(separator, limit)
 *
 * Split a string by the separator.
 * The number splits can me limited.
 *
 * The original string is not modified.
 */
const splitStr = str.split(' ');
console.log(splitStr);


/**
 * slice()
 * slice(start, end)
 *
 * Return the selected elements in the array as a new array.
 * The original array is not modified.
 */
const slicedArray = strList.slice(2, 6); // start is included, end is not included
console.log(slicedArray);


/**
 * splice(startIndex)
 * splice(startIndex, howManyToRemove)
 * splice(startIndex, howManyToRemove, itemToAdd1, itemToAdd2, ...)
 *
 * Add, remove, or insert elements into an array.
 * Modifies the original array.
 */
strList.splice(2); // index includes item to be deleted
strList.splice(2, 4); // second value is how many items to remove
strList.splice(2, 4, 'mi', 'mi', 'mi'); // add unlimited number of items
console.log(strList);


/**
 * unshift()
 *
 * Add an item to the beginning of an array.
 * Modifies the original array.
 */
strList.unshift('leilenah', 'mamea');
console.log(strList);


/**
 * shift()
 *
 * Remove the first item of an array.
 * Return the removed item.
 */
strList.shift();
console.log(strList);


/**
 * pop()
 *
 * Remove the last item of an array.
 * Return the removed item.
 */

strList.pop();
console.log(strList);


/**
 * push()
 *
 * Add to the end of the array.
 * Modifies the original array.
 *
 * Returns the length of the new array.
 */
strList.push('you\'re', 'not', 'my', 'friend');
console.log(strList);


/**
 * concat()
 *
 * Combine two arrays.
 */
const secondList = str.split(' ');
const concatenatedList = strList.concat(secondList);
console.log(concatenatedList.length);


/**
 * join()
 *
 * Combine array elements into a string.
 * You can choose how you want to separate the strings.
 */
const joinedString = strList.join(' ');
console.log(joinedString);


/**
 * toString()
 *
 * Convert array to a string separated by a comma.
 * Convert an integer to a string.
 */
const newString = strList.toString();
console.log(newString);
