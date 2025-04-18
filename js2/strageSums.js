function strangeSums(arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        counter += 1;
      }
    }
  }
  return counter;
}

console.log(strangeSums([2, -3, 3, 4, -2])); // 2
console.log(strangeSums([42, 3, -1, -42])); // 1
console.log(strangeSums([-5, 5])); // 1
console.log(strangeSums([19, 6, -3, -20])); // 0
console.log(strangeSums([9])); // 0
