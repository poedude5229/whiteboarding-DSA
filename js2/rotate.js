/*
You want to rotate an array by a certain number of positions, moving elements from the end to the front.

Given:

rotate([1, 2, 3, 4, 5], 2)
You want the last 2 elements ([4, 5]) to rotate to the front:
[4, 5, 1, 2, 3]
*/
//norm = 2 % 5 = 2
// arr.slice(-2)        → [4, 5]
// arr.slice(0, 3)      → [1, 2, 3]
// concat → [4, 5, 1, 2, 3]

const rotate = (arr, n) => {
  const len = arr.length;
  const normalizedN = n % len;

  return arr.slice(-normalizedN).concat(arr.slice(0, len - norm));
};

const otherRotate = (arr, n) => {
  let len = arr.length;
  let norm = n % len;
  let removed = arr.splice(len - norm, norm);
  arr.unshift(...removed);
  return arr;
};

// console.log(otherRotate([1, 2, 3, 4, 5], 2));

const rThree = (arr, n) => {
  let newArr = [...arr];
  let newStart = newArr.splice(n + 1);
  newArr.unshift(...newStart);
  //   let fixed = [...newArr];
//   console.log(newArr);
  return newArr;
};

console.log(rThree([1, 2, 3, 4, 5], 2));
