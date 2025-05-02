const flatten = (arr) => {
  let newArr = [];
  for (let ele of arr) {
    if (Array.isArray(ele)) {
      newArr = newArr.concat(flatten(ele));
    } else {
      newArr.push(item);
    }
  }
};

console.log(flatten([1, [2, [3, 4], 5], 6]));
