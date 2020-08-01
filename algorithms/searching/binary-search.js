/**
 * Binary Search
 * Time Complexity: Logarithmic - O(log n)
 *
 * Binary search is only useful if your array is sorted.
 * You are esseitially cutting an array in half and discarding the half that is not needed.
 *
 * Reference: https://www.scriptonitejs.com/javascript-searching-algorithms/
 */


/**
 * Write a function that takes a sorted array and an element that could be in that array.
 * The function should return the index at which the element was found.
 *
 * This can be done using indexOf() or Binary Search.
 */
function binarySearch(array, item) {

  // we will flip this flag to true if we find our item
  let itemFound = false;

  // initialize our high, low and mid index values
  let lowInxex = 0;
  let highIndex = array.length - 1;
  let midIndex;

  // initialize our current guessed item
  let guessedItem;

  while (lowInxex <= highIndex) {
    midIndex = Math.floor((lowInxex + highIndex) / 2);
    guessedItem = array[midIndex];

    // if we found the item, exit the loop
    if (guessedItem === item) {
      console.log(`Item found at index ${midIndex}`);
      itemFound = true;
      return;
    }

    // if the item is lower than our guessed item, throw away the larger half of our array
    if (item < guessedItem) {
      highIndex = midIndex - 1;

    // if the item is higher than our guessed item, throw away the smaller half of our array
    } else {
      lowInxex = midIndex + 1;
    }
  }

  // if our item was not found, let the user know
  if (!itemFound) {
    console.log('Item not found.');
  }
};

const myList = [1, 2, 3, 44, 45, 46, 77, 109, 200, 211, 300, 312, 400, 600, 727, 884, 1000];
binarySearch(myList, 44);
