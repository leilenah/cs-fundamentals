/**
 * Write a program that outputs the string representation of numbers from 1 to n.
 *
 * But for multiples of three it should output “Fizz” instead of the number
 * and for the multiples of five output “Buzz”.
 *
 * For numbers which are multiples of both three and five output “FizzBuzz”.
 *
 * Example:
 *
 * n = 15
 * return:
 * [
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
 * ]
 */

function fizzBuzz(number) {
  const result = [];
  let counter = 1;

  while (counter <= number) {
    const isFizz = counter % 3 === 0; // can also use Number.isInteger()
    const isBuzz = counter % 5 === 0; // can also use Number.isInteger()

    const item =
      isFizz && isBuzz
        ? "FizzBuzz"
        : isFizz
        ? "Fizz"
        : isBuzz
        ? "Buzz"
        : counter.toString();

    result.push(item);
    counter++;
  }

  console.log(result);
  return result;
}

fizzBuzz(15);
