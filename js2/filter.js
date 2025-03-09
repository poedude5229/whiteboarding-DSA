// Write a function in JavaScript called getAdults that takes an array of objects representing people.
// Each object has a name and an age property.
// Your function should return an array of names of people who are 18 or older, using the .filter() method.

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 19 },
  { name: "David", age: 16 },
];

const getAdults = (arr) => {
  return arr.filter((x) => x.age >= 18);
};

console.log(getAdults(people));
