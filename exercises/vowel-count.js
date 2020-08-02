/**
 * Write a function that takes a string as argument and returns the number of
 * vowels contained in that string.
 *
 * The vowels are “a”, “e”, “i”, “o”, “u”.
 *
 * findVowels('hello') // --> 2
 * findVowels('why') // --> 0
 */

function findVowels(string) {
  const vowels = "aeiou";
  let vowelCounter = 0;

  for (const char of string.toLowerCase()) {
    if (vowels.includes(char)) {
      vowelCounter++;
    }
  }

  console.log(vowelCounter);
  return vowelCounter;
};

findVowels('hello');
