// Write a function findLongWord that takes an array of words and returns
// the first word that is longer than "X" characters.

const findLongWord = (arr, len) => {
  return arr.find((x) => x.length > len);
};

// Example Input:

console.log(findLongWord(["apple", "banana", "cat", "elephant"], 5));
