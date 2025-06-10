const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  // if(arr.length == 0) 0;
	return arr.reduce((prev, next) => prev + next, 0);
};

const multiply = function(nums){
  return nums.reduce((prev, next) => prev * next, 1)
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	let nums = [];
  for(let i = 1; i <= a; i++){
    nums.push(i);
  }

  return multiply(nums);
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
