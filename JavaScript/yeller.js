function yeller(lst) {
  let arr = [];
  for (let i = 0; i < lst.length; i++) {
    arr.push(`${lst[i].toUpperCase()}!`);
  }
  return arr;
}

console.log(yeller(["hello", "world"]));
