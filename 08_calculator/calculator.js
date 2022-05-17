const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
  return array.reduce((accumulator, actNumber) => accumulator + actNumber, 0);
};

const multiply = function(array) {
  return array.reduce((accumulator, actNumber) => accumulator * actNumber, 1);
};

const power = function(base, exp) {
	return base ** exp;
};

const factorial = function(number) {
	if (number === 0 || number == 1) {
    return 1;
  }
  return number* factorial(number-1);
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
