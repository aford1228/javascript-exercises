const repeatString = (str, num) => {
  // initialize new string as an empty string
  let repeated = '';
  // exit function if the string repeats 0 or fewer times
  if (num < 0) {return 'ERROR';}
  // continue the loop as long as the counter is not 0
  while (num > 0) {
    // concatenate the string
    repeated = repeated.concat(str);
    // decrement the counter
    num--;
  };
  return repeated;
};

// Do not edit below this line
module.exports = repeatString;
