/**
 * Write a function that takes a string and counts
 * how many times a word appears in that string.
 */
function wordCount(string, word) {
  const cleanedString = string.trim().toLowerCase();
  const cleanedWord = word.trim().toLowerCase();

  // returns an array of word matches
  const matches = cleanedString.match(new RegExp(cleanedWord, "g"));

  console.log(matches);
  return matches.length;
}

const string = "I'll tell you what I want, what I really really want.";
wordCount(string, "Want");


/**
 * Then modify the function to return the count of each word within the string.
 * Then try to think of edge cases and possible solutions for them.
 */
function wordCounts(string) {
  // remove whitespace, remove capitalized letters, and remove punctuation
  const cleanedString = string
    .trim()
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");

  // split sentence up by spaces (this will not work if the words aren't spaced)
  const stringArray = cleanedString.split(" ");

  // start our word count dictionary
  const wordCounts = {};

  // loop through the words and add them to our dictionary if they don't exist
  stringArray.forEach(word => {
    if (wordCounts[word]) {
      return;
    }
    const matches = cleanedString.match(new RegExp(word, "g"));
    wordCounts[word] = {
      count: matches.length
    };
  });

  console.log(wordCounts);
  return wordCounts;
}

const string = "I'll tell you what I want, what I really really want.";
wordCounts(string);
