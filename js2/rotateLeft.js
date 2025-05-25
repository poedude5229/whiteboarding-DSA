const rotateLeft = (arr, n) => {
  let copy = arr;
  let copySlice = copy.splice(n);
  //   console.log(copy);
  return [...copySlice, ...copy];
};

console.log(rotateLeft([1, 2, 3, 4, 5], 2));
