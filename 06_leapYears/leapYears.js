const leapYears = (year) => {
  // if year is divisible by for
  return (year % 4 == 0)
  // and if year is NOT divisible by 100
  // or if year IS divisible by 400
  && (year % 100 != 0 || year % 400 == 0) 
  ? true 
  : false;
};

// Do not edit below this line
module.exports = leapYears;
