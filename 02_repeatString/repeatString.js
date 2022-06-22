const repeatString = (str, num) => {
  let repeated = '';
  if (num < 0) {return 'ERROR';}
  while (num > 0) {
    repeated = repeated.concat(str);
    num--;
  };
  return repeated;
};

// Do not edit below this line
module.exports = repeatString;
