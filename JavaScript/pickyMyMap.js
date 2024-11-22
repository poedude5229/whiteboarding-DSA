function pickyMyMap(arr, cb) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      result.push(cb(arr[i]));
    }
  }
  return result;
}

const nums = [1, 2, 3, 4];
console.log(pickyMyMap(nums, (num) => num - 2)); // [-1, 1, 2]

const booleans = [true, false, true, false, true];
console.log(pickyMyMap(booleans, (boolean) => !boolean)); // [true, true]
