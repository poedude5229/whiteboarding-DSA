function tripleSequence(base, length) {
  if (length === 0) {
    return [];
  }
  let arr = [base];
  while (arr.length < length) {
    let last = arr[arr.length - 1];
    let next = last * 3;
    arr.push(next);
  }
  return arr;
}

console.log(tripleSequence(2, 4));
