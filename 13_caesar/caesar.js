const caesar = (str, shift) => {
  // split string into an array of unicode values
  let cipher = str.split('').map(char => char.charCodeAt());

  return cipher.map(char => String.fromCharCode(char)).join('');
}

console.log(caesar('Aaa', -1));

// Do not edit below this line
module.exports = caesar;
