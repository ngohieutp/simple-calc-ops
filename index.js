var _ = require('lodash');

function sum(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function sumAll(arr) {
  return _.reduce(arr, (total, item) => total + item, 0);
}

module.exports = {
	sum,
	minus,
	mul,
	div,
	sumAll
}