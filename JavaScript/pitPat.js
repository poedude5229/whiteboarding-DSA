function pitPat(max) {
  let arr = [];
  for (let i = 0; i <= max; i++) {
    if ((i % 4 == 0 && i % 6 !== 0) || (i % 6 == 0 && i % 4 !== 0)) {
      arr.push(i);
    }
  }
  return arr;
}

console.log(pitPat(18));
