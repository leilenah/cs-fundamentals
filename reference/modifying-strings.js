/**
 * Modifying Strings
 *
 * Reference: https://www.w3schools.com/js/js_string_methods.asp
 */

/**
 * includes()
 *
 * Return true if a string includes a substring.
 */
const string = "This is Halloween";
console.log(string.includes("is"));


/**
 * charAt()
 *
 * Returns the character at the specified index in a string.
 */
const string = "leilenah";
console.log(string.charAt(1));


/**
 * replace()
 *
 * Replace all occurances of a substring with another substring.
 * The values can be standard string or regular expression.
 *
 * This comes in handy when stripping punctuation from a string.
 */
const string = "This is a!! String? With a LOT.... of punctuation$$$";

const cleanedString = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "");
console.log(cleanedString);

const partyString = string.replace("String?", "PARTY!");
console.log(partyString);


/**
 * match()
 *
 * Search a string for matches against a regular expression.
 * Return the array of matches.
 *
 * Use RegExp object with "global" value to get back an array of matches.
 */
const string = "I'll tell you what I want, what I really really want."
const matches = string.match(new RegExp("want", "g")); // g for global
console.log(matches);


/**
 * toUpperCase()
 *
 * Convert string to all uppercase letters.
 * Does not modify the original string.
 */
const string = "this is a string";
const upperCaseString = string.toUpperCase();
console.log(upperCaseString);


/**
 * toLowerCase()
 *
 * Convert string to all lowercase letters.
 * Does not modify the original string.
 */
const string = "THIS IS A STRING";
const lowerCaseString = string.toLowerCase();
console.log(lowerCaseString);


/**
 * trim()
 *
 * Trim whitespace from both sides of a string.
 * Does not modify the original string.
 */
const string = "       Hello World      ";
const trimmedString = string.trim(); // needs to be stored in a new var


/**
 * split()
 * split("")
 * split(" ")
 *
 * Split a string into an array of substrings.
 */
const string = "Hello darkness my old friend.";
const splitWords = string.split(" "); // split by spaces
const splitCharacters = string.split(""); // split each character
console.log(splitWords);
console.log(splitCharacters);


/**
 * length
 *
 * Returns the length of a string.
 */
const string = "Thisisaverylongstring";
console.log(string.length);


/**
 * search()
 *
 * Search a string for a substring and retirn the position of the match.
 * Similar to indexOf().
 */
const string = "Locate the word 'locate'";
console.log(string.search("Locate"));

