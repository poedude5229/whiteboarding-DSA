const getCombinations = (arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      res.push([arr[i], arr[j]]);
    }
  }
  return res;
};

console.log(getCombinations([1, 2, 3]));
// ➞ [[1, 2], [1, 3], [2, 3]]

console.log(getCombinations(["a", "b", "c", "d"]));
// ➞ [['a', 'b'], ['a', 'c'], ['a', 'd'], ['b', 'c'], ['b', 'd'], ['c', 'd']]
