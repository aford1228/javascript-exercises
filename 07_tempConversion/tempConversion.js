const ftoc = (f) => Math.round(((f - 32) * (5 / 9)) * 10) / 10;

const ctof = (c) => Math.round(((c * (5/9)) + 32) * 10) / 10;

console.log(ctof(73.2));

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
