// initialize a function expression that accepts an array of 
// arguments called 'n'
const sumAll = (...n) => {
  // initialize sum to 0
  let sum = 0;
  // sort the arguments numerically
  n.sort((a, b) => a - b);
  // check if all arguments are positive integers
  if (n.every(element => typeof element === 'number') 
  && n.every(element => element >= 0)) {
    // initialize loop counter as the first (lower) argument
    // continue looping while the counter is less than the higher argument
    for (let i = n[0]; i <= n[n.length - 1]; i++) {
      sum = sum + i;
    }
  }
  // if any arguments are not numbers, throw an error
  else {
    return `ERROR`;
  }
  return sum;
}

// Do not edit below this line
module.exports = sumAll;
