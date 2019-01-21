exports.add = function(a, b) {
  return a + b;
};

exports.subtract = function(a, b) {
  return a - b;
};

exports.compute = function(a, b, operation) {
  return operation(a, b);
};
