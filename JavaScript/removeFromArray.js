function removeFromArray(location, arr) {
  if (location === "FRONT") {
    arr.shift();
  }
  if (location == "BACK") {
    arr.pop();
  }
  return arr;
}

console.log(removeFromArray("FRONT", [0, 1, 2, 3, 4]));
console.log(removeFromArray("BACK", [0, 1, 2, 3, 4]));
