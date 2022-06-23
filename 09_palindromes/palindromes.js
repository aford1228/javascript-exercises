const palindromes = (str) => {
  let forward = str.toLowerCase().replace(/[^a-zA-Z]/gi, '');
  let reverse = str.toLowerCase().replace(/[^a-zA-Z]/gi, '').split('').reverse().join('');
  console.log(forward, reverse);
  if (forward === reverse) {
    return true;
  }
  else {return false};
};

// Do not edit below this line
module.exports = palindromes;
