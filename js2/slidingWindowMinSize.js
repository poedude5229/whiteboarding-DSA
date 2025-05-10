const minInWindows = (arr, size) => {
  let res = [];
  for (let i = 0; i <= arr.length - size; i++) {
    let sliiice = arr.slice(i, i + size);
    res.push(Math.min(...sliiice));
  }
  return res;
};

console.log(minInWindows([1, 3, -1, -3, 5, 3, 6, 7], 3));
