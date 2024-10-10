const evenNumbers = (max) => {
  let res = [];
  for (let i = 0; i < max; i++) {
    if (i > 0 && i % 2 == 0) {
      res.push(i);
    }
  }
  return res;
};

console.log(evenNumbers(7));
