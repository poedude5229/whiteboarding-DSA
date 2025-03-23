function pairsMaker(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let x = i + 1; x < arr.length; x++) {
      res.push([arr[x], arr[i]]);
    }
  }
  return res;
}

console.log(pairsMaker(["a", "b", "c", "d"]));
