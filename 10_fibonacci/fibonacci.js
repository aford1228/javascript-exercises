const power = (n, exp) => {
  let pow = 1;
  while (exp != 0) {
    pow *= n;
    exp--;
  }
  return pow;
}

const phi = (1 + Math.sqrt(5)) / 2;
const phi2 = -1 / phi;

const fibonacci = (n) => {
  if (n > 0) {
    return Math.floor((power(phi, n) - power(phi2, n)) / Math.sqrt(5));
  }
  else {return `OOPS`;};
}

// Do not edit below this line
module.exports = fibonacci;
