/**
 * Write a function that takes an integer
 * return true or false depending on "happy"
 *
 * "happy" meaning a number, if split into integers
 *
 * e.g.
 * 19 = 1 squared + 9 squared = 82
 * 8 squared + 2 squared = 68
 * 6 squared + 8 squared = 100
 * 1 squared + 0 squared + 0 squared = 1
 *
 * 4 does not end up being happy ("1");
 * 4 = 4 squared = 16
 * 1 sq + 6 sq = 37
 * 3 sq + 7 sq = 58
 * 5 sq + 8 sq = 89
 * 8 sq + 9 sq = 145
 * 1 sq + 4 sq + 5 sq = 42
 * 4 sq + 2 sq = 20
 * 2 sq + 0 sq = 4 // not happy
 *
 * Continually squaring these numbers should equal 1 (this is happy)
 */

// TODO: Refactor / complete
function happyNumber(int) {
  let start;
  let tempCounter = 0;

  while (tempCounter < 10 || start !== 1) {
    tempCounter++;

    // if single digit, get the square
    // if (int.toString().length === 1) {
    //   const intSq = Math.pow(int, 2);
    //   start = intSq;
    // } else {
    const parsedInt = int.toString().split("");

    console.log("parsedInt", parsedInt);

    let sum = 0;

    parsedInt.forEach((int) => {
      // convert to int square that
      const intSq = Math.pow(parseInt(int, 10), 2);
      console.log("intSq", intSq);

      sum += intSq;

      console.log("sum", sum);
    });

    start = sum;
    console.log("start", start);
    break;
    // }
  }
}

happyNumber(19);
