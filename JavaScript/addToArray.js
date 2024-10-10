// Write a function that takes a location, either "FRONT" or "BACK" and adds an element to either the front or back of the given array.
// If location is anything besides "FRONT" or "BACK", print an error.

const addToArray = (location, element, arr) => {
  if (location == "FRONT") {
    arr.unshift(element);
  } else if (location == "BACK") {
    arr.push(element);
  } else {
    console.error(
      "Please specificy a proper location to add an element to the array"
    );
  }
};

let testArray = [1, 2, 3];

addToArray("FRONT", 0, testArray);
console.log(testArray);

addToArray("BACK", 4, testArray);
console.log(testArray);
