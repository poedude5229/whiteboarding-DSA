function factorialArr(arr) {
  let sol = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      let product = arr[i];
      for (let j = 1; j < arr[i]; j++) {
        product *= j;
      }
      sol.push(product);
    } else sol.push(1);
  }
  return sol;
}

console.log(factorialArr([1, 0]));
