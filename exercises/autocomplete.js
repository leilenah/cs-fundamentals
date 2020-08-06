/**
 * Write a function which accepts a buffer of keyboard actions, inputBuffer, and
 * a list of words, wordsList, and returns a subset of words from the words list
 * that match the user input for each "wait" action that is encountered.
 *
 * The input buffer actions will be one of "backspace", "wait" or "char".
 *
 * The "char" action represents a single character input from the user.
 * The "backspace" action represents the backspace key being pressed.
 * The "wait" action represents the user stopped typing for an amount of time
 * and should be shown results
 *
 * Assume that the autocomplete function is being run on a persistent loop and
 * being passed the input buffer each time.
 *
 * The caller (IDE) will build and drain the buffer for you.
 *
 * Signatures
 * ----------
 * enum UserAction {
 *  case backspace     // User deleted the last character
 *  case wait          // User paused typing
 *  case char(String)  // User typed an ASCII character
 * }
 *
 * func autocomplete(inputBuffer: [UserAction], wordsList: [String]) -> [[String]]
 *
 * Example
 * -------
 * let wordsList: [String] = [
    "apple",
    "bear",
    "home",
    "homes",
    "hone",
    "honed",
    "honey",
    "xylophone",
    "zebra"
  ]
 *
 * let inputBuffer: [UserAction] = [
    .char("h"), // "h"
    .char("o"), // "ho"
    .wait,
    .char("m"), // "hom"
    .wait,
    .backspace, // "ho"
    .char("n"), // "hon"
    .wait
  ]
 *
 * Call
 * ----
 * let matchGroups: [[String]] = autocomplete(
 *  inputBuffer: inputBuffer,
 *  wordsList: wordsList
 * )
 *
 * Expected Output
 * ---------------
 * matchGroups == [
    [ "home", "homes" "hone", "honed", "honey" ], // "ho"
    [ "home", "homes" ],                          // "hom"
    [ "hone", "honed", "honey" ]                  // "hon"
  ]
 *
 * Note
 * ----
 * You do not need to implement capturing the keyboard input or the WAIT action.
 * You may assume that the caller of this function has already done this.
 */

function autoComplete(inputBuffer, wordsList) {
  let inputStr = "";
  const matchGroups = [];

  inputBuffer.forEach(input => {
    switch (input) {
      // "wait" -- check wordlist
      case "wait":
        const matches = [];

        wordsList.forEach(word => {
          const wordPart = word.slice(0, inputStr.length);

          if (wordPart === inputStr) {
            matches.push(word);
          }
        });

        if (matches.length) {
          matchGroups.push(matches);
        }
        break;

      // "backspace" -- remove from matchGroups
      case "backspace":
        // remove a character from inputStr
        inputStr = inputStr.slice(0, inputStr.length - 1);
        break;

      default:
        inputStr += input;
    }
  });

  console.log(matchGroups);
  return matchGroups;
}

const inputBuffer = ["h", "o", "wait", "m", "wait", "backspace", "n", "wait"];

const wordsList = [
  "apple",
  "bear",
  "home",
  "homes",
  "hone",
  "honed",
  "honey",
  "xylophone",
  "zebra"
];

autoComplete(inputBuffer, wordsList);
