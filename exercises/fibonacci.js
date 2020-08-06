/**
 * A Fibonacci sequence is an ordering of numbers where each number is the sum
 * of the preceding two.
 *
 * The first ten numbers of the Fibonacci sequence are: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
 *
 * Fibonacci is calculated by adding up the two numbers before it,
 *
 * Write a function that returns the nth entry in the Fibonacci sequence,
 * where n is a number you pass in as argument to the function. E.g.
 *
 * fibonacci(3)  // --> 2
 */

// option 1
function fibonacci(i) {
  let a = 1;
  let b = 0;
  let temp;

  while (i >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    i--;
  }

  console.log(b);
  return b;
}

fibonacci(3);


// option 2
function fibonacci(num) {
  if (num <= 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

fibonacci(3);
