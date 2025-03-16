// Write a function removeShortWords that takes an array of words and
// removes words that are shorter than "X" letters.

const removeShortWords = (arr, length) => {
  return arr.filter((x) => x.length > length);
};

console.log(removeShortWords(["hi", "hello", "to", "world", "no"], 4));
