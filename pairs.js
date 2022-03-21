/**************************************************************
 * pairs(names):
 *
 * - It accepts an array of names:
 *       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish'])
 *
 * - It returns a randomized pairing of names:
 *       [['Mishmish', 'Asis'], ['Fawas', 'Hamsa']]
 *
 * - It can handle an odd number of names:
 *       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish', 'Hussein'])
 *       returns [['Mishmish', 'Fawas'], ['Asis', 'Hussein'], ['Hamsa']]
 *
 * - It returns an empty array if it gets passed an empty array:
 *       pairs([]) returns [] ((done))
 *
 * - It returns an empty array if it gets passed nothing:
 *       pairs() returns [] ((done))
 ****************************************************************/

/**********************************************
 * READ ME!!!!
 *
 * We've included this handy method for you.
 * It will remove a random element from an array
 * and return it to you.
 *
 * Example Usage:
 *
 * let numbers = [1, 2, 3, 4];
 * let random = numbers.getRandom();  // randomly returns something from the array. e.g. 3
 * console.log(random); // 3 (the random element)
 * console.log(numbers);  // [1, 2, 4] (missing the random element)
 ************************************************/
Array.prototype.getRandom = function () {
  return this.splice(Math.floor(Math.random() * this.length), 1)[0];
};

function pairs(names) {
  // Your code goes here
  let emptyarr = [];
  //no parameters
  if (names === undefined) {
    return emptyarr;
  }
  //empty array
  else if (names.length === 0) {
    return emptyarr;
  }
  let len = names.length;
  //even array
  if (len % 2 === 0) {
    while (names.length !== 0) {
      let smallarray = [];
      while (smallarray.length < 2) {
        let random = names.getRandom();
        smallarray.push(random);
      }
      emptyarr.push(smallarray);
    }
    return emptyarr;
  } //odd array
  else {
    while (names.length !== 0) {
      let smallarray = [];
      if (names.length === 1) {
        let smallarray = names;
        emptyarr.push(smallarray);
        return emptyarr;
      } else {
        while (smallarray.length < 2) {
          let random = names.getRandom();
          smallarray.push(random);
        }
      }

      emptyarr.push(smallarray);
    }
  }
}

module.exports = pairs;

console.log(
  typeof pairs([
    "Asis",
    "Hamsa",
    "Fawas",
    "Mishmish",
    "Hussein",
    "Lailz",
    "Mr Potato",
  ])
);
console.log(
  pairs(["Asis", "Hamsa", "Fawas", "Mishmish", "Hussein", "Lailz", "Mr Potato"])
);
