/**
 * Write a program that prints the numbers from 1 to 100.
 * But for multiples of three print “Fizz” instead of the number.
 * For the multiples of five print “Buzz”.
 * For numbers which are multiples of both three and five print “FizzBuzz”.
 */

function fizzBuzzPrint() {
    for (let i = 1; i < 101; i++) {
        if (i % (3 * 5) == 0) {
            console.log('FizzBuzz');
        } else if (i % 3 == 0) {
            console.log('Fizz');
        } else if (i % 5 == 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

/**
 * Replace all occurances of "fizz" with "buzz".
 */

const sentance = 'Hello darkness my old fizz, I want to talk to you fizz';

function fizzReplace(string) {

    // array split and join option
    return string.split('fizz').join('buzz');
    // split() will omit the string being used for the split
    // join() will join all elements of the array (defaults to comma)

    // regular expression option
    // return string.replace(new RegExp('fizz', 'g'), 'buzz'); // 'g' for global

    // this will only replace the first occurance
    // return string.replace('fizz', 'buzz');
}

console.log(fizzReplace(sentance));
