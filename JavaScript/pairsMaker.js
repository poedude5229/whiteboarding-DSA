/*
Write a function pairsMaker(arr) that takes in a an array as an argument.
The function should return a 2D array where the subarrays represent unique pairs of element from the input array.
*/

function pairsMaker(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      res.push([arr[i], arr[j]]);
    }
  }
  return res;
}

console.log(pairsMaker(["a", "b", "c", "d"]));
