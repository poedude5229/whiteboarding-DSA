function fizzBuzz(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    if ((i % 3 == 0 && i % 5 !== 0) || (i % 3 !== 0 && i % 5 == 0)) {
      arr.push(i);
    }
  }
  return arr;
}

console.log(fizzBuzz(12));
