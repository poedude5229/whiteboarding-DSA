function popper(array, num) {
  return array.splice(-num, num);
}

let arr1 = ["a", "b", "c", "d", "e"];
console.log(popper(arr1, 2));

let arr2 = ["kale", "spinach", "collard greens", "cabbage"];
console.log(popper(arr2, 1)); // [ 'cabbage' ]
console.log(arr2); // [ 'kale', 'spinach', 'collard greens' ]
