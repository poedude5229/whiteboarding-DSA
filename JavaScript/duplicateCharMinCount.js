function duplicateCharMinCount(string, minCount) {
  let returnedArray = [];
  let countObj = {};
  for (let i = 0; i < string.length; i++) {
    if (!Object.keys(countObj).includes(string[i])) {
      countObj[string[i]] = 1;
    } else {
      countObj[string[i]] += 1;
    }
  }
  for (let key in countObj) {
    if (countObj[key] >= minCount) {
      returnedArray.push(key);
    }
  }
  return returnedArray;
}

console.log(duplicateCharMinCount("apple", 2)); // ["p"]
console.log(duplicateCharMinCount("banana", 2)); // ["a", "n"]
console.log(duplicateCharMinCount("What about a longer string?", 3)); // ["a", "t", " "]
