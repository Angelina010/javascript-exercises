const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = (num1, num2) => (num1 - num2);

const sum = function(arr) {
  let res = 0;
  arr.forEach((num) => {
      res += num;
  })
  return res;
  
	
};

const multiply = function(arr) {
  res = 1;
  arr.forEach((num) => {
    res *= num;
  })
  return res;

};

const power = (base, exponent) => {
  res = 1;
  for (let i = 0; i < exponent; i++){
    res *= base;
  }
  return res;
}

const factorial = function(num) {
  res = 1;
  for (let i = num; i > 0; i--){
    res *= i;
  }
  return res;
	
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
