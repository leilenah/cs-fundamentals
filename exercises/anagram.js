/**
 * A word is an anagram of another word if both use the same letters in the same
 * quantity, but arranged differently.
 *
 * Write a function that checks if two provided strings are anagrams of each other;
 * letter casing shouldn’t matter.
 *
 * Also, consider only characters, not spaces or punctuation. E.g.
 *
 * anagram('finder', 'Friend')  --> true
 * anagram('hello', 'bye') --> false
 */

function normalizeString(string) {
  return string.trim().toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "");
}

function isAnagram(str1, str2) {
  // trim strings, remove punctuatiom and make lowercase
  str1 = normalizeString(str1);
  str2 = normalizeString(str2);

  // loop through string characters and compare matches
  for (let i = 0; i < str1.length; i++) {
    const character = str1.charAt(i);
    const regex = new RegExp(character, "g");

    const str1Matches = str1.match(regex) || [];
    const str2Matches = str2.match(regex) || [];

    if (!str1Matches || !str2Matches) {
      console.log(false);
      return false;
    }

    // return false if matches don't align
    if (str1Matches.length !== str2Matches.length) {
      console.log(false);
      return false;
    }
  }

  // default to return true
  console.log(true);
  return true;
};

isAnagram('finder', 'Friend');
