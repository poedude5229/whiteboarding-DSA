const dynamicFizzBuzz = (max, num1, num2) => {
  let res = [];
  for (let i = num1; i <= max; i++) {
    if (
      (i % num1 === 0 && i % num2 !== 0) ||
      (i % num2 === 0 && i % num1 !== 0)
    ) {
      res.push(i);
    }
  }
  return res;
};
