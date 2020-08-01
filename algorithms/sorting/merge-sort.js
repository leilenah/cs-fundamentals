/**
 * Merge Sort
 * Time Complexity: Quasilinear - O(n log(n))
 *
 * Reference: https://www.educative.io/courses/mastering-data-structures-and-sorting-algorithms-in-javascript/q2LjLJ07Ej2
 */

function merge(left, right) {
  let sorted = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    const leftItem = left[leftIndex];
    const rightItem = right[rightIndex];

    if (leftItem < rightItem) {
      sorted.push(leftItem);
      leftIndex++;
    } else {
      sorted.push(rightItem);
      rightIndex++;
    }
  }

  return (
    sorted
      .concat(left.slice(leftIndex))
      .concat(right.slice(rightIndex))
  );
}


function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  const midIndex = Math.floor(array.length / 2);
  const left = array.slice(0, midIndex);
  const right = array.slice(midIndex);

  return (
    merge(
      mergeSort(left),
      mergeSort(right)
    )
  );
}


const items = [1, 2, 393, 494, 0, -838, 29, 45, 78, 14, 19, 22, 102, 2000, 3, 7, 8, 20];
const sortedItems = mergeSort(items);
console.log(sortedItems);
