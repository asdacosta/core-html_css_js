const add = function(m, n) {
	return m + n;
};

const subtract = function(m, n) {
	return m - n;
};

const sum = function(args) {
    let argSum = 0;
    for (let arg of args) {
        argSum += arg;
    }
	return argSum;
};

const multiply = function(...args) {
    let argMul = 1;
    for (let arg of args) {
        argMul *= arg;
    }
    return argMul;
};

const power = function(down, up) {
	return down ** up;
};

const factorial = function(num) {
	let m = 1,
        fact = 1;
    if (num === 0 || num === 1) {
        return 1;
    } else {
        while (m <= num) {
            fact *= m;
            m++;
        }
    }
    return fact;
};


module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};