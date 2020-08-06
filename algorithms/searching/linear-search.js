/**
 * Linear Search
 * Time Complexity: Linear - O(n)
 *
 * Reference: https://www.scriptonitejs.com/javascript-searching-algorithms/
 */


/**
 * Loop through the items until you reach the number 15.
 * Log the index of number 15 to standard output.
 */
function findTargetIndex(array, target) {
  for (const i in array) {
    if (array[i] === target) {
      console.log(`${target} found at index ${i}.`);
      return;
    }
  }

  console.log(`${target} not found.`);
};

const items = [2, 5, 3, 7, 8, 10, 15, 18, 24, 111, 12, 19, 87];
findTargetIndex(items, 22);


/**
 * Find the minimum value in an unsorted array.
 * If the array is unsorted, we cannot avoid linear search.
 */
function findMinValue(array) {
  if (!array || !array.length) {
    return;
  }

  let minValue = array[0];

  items.forEach((item) => {
    if (item < minValue) {
      minValue = item;
    }
  });

  console.log(minValue);
  return minValue;
};

const items = [111, 5, 18, 3, 7, 8, 10, 19, 15, 24, -33, 12, 2, 87];
findMinValue(items);


/**
 * Find the maximum value in an unsorted array.
 * If the array is unsorted, we cannot avoid linear search.
 */
function findMaxValue(array) {
  if (!array || !array.length) {
    return;
  }

  let maxValue = array[0];

  items.forEach(item => {
    if (item > maxValue) {
      maxValue = item;
    }
  });

  console.log(maxValue);
  return maxValue;
};

const items = [111, 5, 18, 3, 7, 8, 10, 19, 15, 24, -33, 12, 2, 87];
findMaxValue(items);
