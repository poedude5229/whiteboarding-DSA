const maxInWindows = (arr, size) => {
  let res = [];
  for (let i = 0; i <= arr.length - size; i++) {
    let sliiice = arr.slice(i, i + size);
    res.push(Math.max(...sliiice));
  }
  return res;
};

console.log(maxInWindows([1, 3, -1, -3, 5, 3, 6, 7], 3));
