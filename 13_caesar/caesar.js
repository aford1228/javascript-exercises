const caesar = (str, shift) => {
  // split string into an array of unicode values
  let cipher = str.split('').map(char => char.charCodeAt());
  // iterate over the cipher array
  cipher = cipher.map(char => {
    // use upperCipher for uppercase characters
    if (char >= 65 && char <= 90) {
      char = upperCipher(char, shift);
    }
    // use lowerCipher for lowercase characters
    else if (char >= 97 && char <= 122) {
      char = lowerCipher(char, shift);
    };
    // exit function without changing non-alphabetic characters
    return char;
  });
  return cipher.map(char => String.fromCharCode(char)).join('');
}

const lowerCipher = (unicode, shift) => {
  // add the cipher shift
  let result = unicode + shift;
  // loop results between a and z
  return result < 97 ? result += 26
  : result > 122 ? result -= 26
  : result;
}

const upperCipher = (unicode, shift) => {
  let result = unicode + shift;
  return result < 65 ? result += 26
  : result > 90 ? result -= 26
  : result;
}

// Do not edit below this line
module.exports = caesar;
