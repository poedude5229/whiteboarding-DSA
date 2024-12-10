var createCounter = function (n) {
  return function () {
    n = n + 1;
    return n - 1;
  };
};

const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());
