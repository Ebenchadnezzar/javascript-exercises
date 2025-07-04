const convertToCelsius = function(f) {
  let c = (f - 32) * (5 / 9);
  return Math.round(c * 10) / 10;  
};

const convertToFahrenheit = function(c) {
  let f = (c * (9 / 5)) + 32 + 1;
  return Math.round(f * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
