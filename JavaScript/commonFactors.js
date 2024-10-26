const commonFactors = (n1, n2) => {
  let greater;
  let res = [];
  n1 > n2 ? (greater = n1) : (greater = n2);
  for (let i = 0; i < greater; i++) {
    n1 % i == 0 && n2 % i == 0 ? res.push(i) : {};
  }
  return res;
};

console.log(commonFactors(50, 30));
console.log(commonFactors(8, 4));
console.log(commonFactors(4, 8));
