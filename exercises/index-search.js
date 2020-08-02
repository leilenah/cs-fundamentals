/**
 * Write a function that takes a sorted array of integers and a single integer
 * and returns the index of the first integer smaller than the input.
 */

function getPrevIndex(array, int) {
  let lowIndex = 0;
  let highIndex = array.length - 1;
  let midIndex;

  let guessedInt;

  while (lowIndex <= highIndex) {
    midIndex = Math.floor((lowIndex + highIndex) / 2);
    guessedInt = array[midIndex];

    if (guessedInt === int) {
      const prevIndex = midIndex - 1;

      // confirm that number at prevIndex is not a duplicate of the input integer
      if (array[prevIndex] !== int) {
        console.log(prevIndex);
        return prevIndex;
      }
    }

    // if the guess is smaller than the integer, we want to get rid of the left side of the array
    if (guessedInt < int) {
      lowIndex = midIndex + 1;
    } else {
      highIndex = midIndex - 1;
    }
  }
}

const sortedArray = [0, 1, 6, 8, 12, 17, 33, 45, 57, 57, 101, 112, 213, 400, 509];
getPrevIndex(sortedArray, 57); // return 7
