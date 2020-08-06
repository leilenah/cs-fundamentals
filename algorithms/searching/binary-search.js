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
  let lowIndex = 0;
  let highIndex = array.length - 1;

  while (lowIndex <= highIndex) {
    const midIndex = Math.floor((lowIndex + highIndex) / 2);
    const guessedItem = array[midIndex];

    if (guessedItem === item) {
      console.log(`Item found at ${midIndex}`);
      return midIndex;
    }

    if (item > guessedItem) {
      // get rid of the left side of the array
      lowIndex = midIndex + 1;
    } else {
      // get rid of the right side of the array
      highIndex = midIndex - 1;
    }
  }

  console.log("Item not found");
}

const myList = [1, 2, 3, 44, 45, 46, 77, 109, 200, 211, 300, 312, 400, 600, 727, 884, 1000];
binarySearch(myList, 44);
