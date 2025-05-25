const interleave = (arr1, arr2) => {
  let res = [];
  let maxLength = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < maxLength; i++) {
    if (i < arr1.length) {
      res.push(arr1[i]);
    }
    if (i < arr2.length) {
      res.push(arr2[i]);
    }
  }
  return res;
};

console.log(interleave([1, 2, 3], ["a", "b", "c"])); // [1, 'a', 2, 'b', 3, 'c']
console.log(interleave([1, 2], ["a", "b", "c", "d"])); // [1, 'a', 2, 'b', 'c', 'd']
