const unique = (list) => {
  let arr = [];
  for (let i = 0; i < list.length; i++) {
    if (!arr.includes(list[i])) {
      arr.push(list[i]);
    }
  }
  return arr;
};

console.log(unique([1, 1, 2, 3, 3])); // [1, 2, 3]
console.log(unique(["a", "b", "c", "b"])); // ['a', 'b', 'c']
