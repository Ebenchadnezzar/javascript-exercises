const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  return arr.reduce((total, cur) => total + cur, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, cur) => product * cur, 1);
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
  if (a < 0) return NaN;
  if (a == 0) return 1;
  if (a <= 2) return a;

  let result = 6;
  
  for (let i = 4; i <= a; ++i) {
    result *= i;
  }

  return result;
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
