function rotateRight(array, num) {
  let copied = array.slice();
  let section = copied.splice(num + 1);
  return [...section, ...copied];
}

let arr1 = ["a", "b", "c", "d", "e"];
console.log(rotateRight(arr1, 2));
console.log(arr1);
