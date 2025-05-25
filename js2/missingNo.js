const missingNo = (arr) => {
  let max = Math.max(...arr);
  let seth = new Set(arr);
  for (let i = 1; i <= max; i++) {
    if (!seth.has(i)) return i;
  }
};

console.log(missingNo([1, 2, 4, 5]));
