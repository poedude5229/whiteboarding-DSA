function filterUserProfiles(arr, cb) {
  let filtered = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      filtered.push(arr[i].name);
    }
  }
  return filtered;
}

const facebookUsers = [
  { name: "John", age: "21", state: "Florida" },
  { name: "Mary", age: "57", state: "California" },
  { name: "Judy", age: "47", state: "Texas" },
  { name: "Mike", age: "32", state: "New York" },
];

const cb1 = (user) => user.age > 30;
console.log(filterUserProfiles(facebookUsers, cb1)); // ["Mary", "Judy", "Mike"]
