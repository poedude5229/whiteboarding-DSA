// Write a function called nameGrabber that takes an array
// of objects with a name property and returns an array of just the names.

const nameGrabber = (arr) => {
  let res = [];
  arr.forEach((x) => res.push(x.name));
  return res;
};

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

console.log(nameGrabber(users));
