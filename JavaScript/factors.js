function factorsOf(num) {
  let factors = [];
  for (let i = 0; i <= num; i++) {
    if (num % i == 0) {
      factors.push(i);
    }
  }
  return factors;
}

console.log(factorsOf(5));
console.log(factorsOf(8));
console.log(factorsOf(9));

console.log(factorsOf(2016));
