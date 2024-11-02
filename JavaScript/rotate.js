function rotate(array, num) {
  if (num > 0) {
    for (let i = 0; i < num; i++) {
      let item = array.pop();
      array.unshift(item);
    }
  } else {
    for (let i = 0; i < -num; i++) {
      let item = array.shift();
      array.push(item);
    }
  }
}

let arr = ["a", "b", "c", "d", "e"];
rotate(arr, 2);
console.log(arr);

let animals = ["wombat", "koala", "opossum", "kangaroo"];
rotate(animals, -1);
console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
