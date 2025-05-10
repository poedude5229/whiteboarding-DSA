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

const get3Combinations = (arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) res.push([arr[i], arr[j]]);
    }
  }
  return res;
};

console.log(get3Combinations([1, 2, 3]));
// ➞ [[1, 2], [1, 3], [2, 3]]

console.log(get3Combinations(["a", "b", "c", "d"]));
// ➞ [['a', 'b'], ['a', 'c'], ['a', 'd'], ['b', 'c'], ['b', 'd'], ['c', 'd']]

function getCombinationsMult(arr, size) {
  const result = [];

  const helper = (start, combo) => {
    if (combo.length === size) {
      result.push([...combo]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      combo.push(arr[i]);
      helper(i + 1, combo);
      combo.pop();
    }
  };

  helper(0, []);
  return result;
}
