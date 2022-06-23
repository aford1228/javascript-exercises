const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = ([...n]) => {
	let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum = sum + n[i];
  };
  return sum;
};

const multiply = ([...n]) => {
  let product = 1;
  for (let i = 0; i < n.length; i++) {
    product = product * n[i];
  };
  return product;
};

const power = (n, exp) => {
  let pow = 1;
  while (exp != 0) {
    pow *= n;
    exp--;
  }
  return pow;
}

const factorial = (n) => {
	let fac = 1;
  while (n > 0) {
    fac *= n;
    n--;
  };
  return fac;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
