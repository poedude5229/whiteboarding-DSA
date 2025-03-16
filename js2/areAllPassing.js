// Write a function areAllPassing that checks if all numbers in an array are either pos or negative.

function areAllPassing(arr, condition) {
  if (condition === "negative") {
    return arr.every((x) => x < 0);
  } else {
    return arr.every((x) => x > 0);
  }
}

console.log(areAllPassing([1, 2, 3, 4], "positive"));
console.log(areAllPassing([1, -2, 3, 4], "positive"));
