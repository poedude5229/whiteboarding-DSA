const findMostFrequent = (arr) => {
  let countObj = {};
  for (let x of arr) {
    x in countObj ? (countObj[x] += 1) : (countObj[x] = 1);
  }

  let maxCount = 0;
  let mostFrequent = null;

  for (let key in countObj) {
    if (countObj[key] > maxCount) {
      maxCount = countObj[key];
      mostFrequent = +key;
    }
  }

  return mostFrequent;
};

console.log(findMostFrequent([1, 3, 1, 3, 2, 1])); // ➞ 1
