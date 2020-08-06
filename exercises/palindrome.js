/**
 * A palindrome is a word, sentence or other type of character sequence which
 * reads the same backward as forward.
 *
 * E.g. “racecar” and “Anna” are palindromes. “Table” and “John” aren’t palindromes,
 * because they don’t read the same from left to right and from right to left.
 *
 * Given a string, return true if the string is a palindrome and false if it isn’t.
 * Include spaces and punctuation in deciding if the string is a palindrome. E.g.
 *
 * palindrome('racecar')  ===  true
 * palindrome('table')  ===  false
 */

/**
 * Option 1
 */
function isPalindrome(string) {
  string = string.trim().toLowerCase();
  const reversedString = string.split("").reverse().join("");

  console.log(string === reversedString);
  return string === reversedString;
}

isPalindrome("racecar");


/**
 * Option 2
 */
function isPalindrome(string) {
  // split string into an array of characters
  const array =
    string
      .trim()
      .toLowerCase()
      .split("");

  // split that array in half
  const midIndex = Math.floor(array.length / 2);
  const left = array.slice(0, midIndex); // 0 is the starting point
  const right = array.slice(midIndex);

  // reverse the second half
  right.reverse();

  // loop over the first half and compare it to the second half
  // opt for a for loop here instead of forEach beacuse you can't break out of a forEach
  for (const i in left) {
    if (left[i] !== right[i]) {
      console.log(false);
      return false;
    }
  }

  console.log(true);
  return true;
};

isPalindrome("racecar");
