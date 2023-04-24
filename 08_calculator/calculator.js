const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	return numbers.reduce((total, number) => add(total, number), 0)
};

const multiply = function(numbers) {
	return numbers.reduce((total, number) => total * number, 1)
};

const power = function(n,pow) {
	return n ** pow;
};

const factorial = function(n) {
	if (n === 0 ) {
    return 1;
  } else {
    return n * factorial(n-1);
  }
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
