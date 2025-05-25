const countOccurences = (arr) => {
  let countObj = {};
  for (let x of arr) {
    x in countObj ? (countObj[x] += 1) : (countObj[x] = 1);
  }
  console.log(countObj);
};

countOccurences(["apple", "banana", "apple", "orange", "banana", "banana"]);
