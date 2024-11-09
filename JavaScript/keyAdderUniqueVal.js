function keyAdderUniqueVal(object, key, value) {
  if (!Object.values(object).includes(value)) {
    object[key] = value;
  }
  return object;
}

let cat = { name: "Willie", color: "orange" };
keyAdderUniqueVal(cat, "toy", "yarn"); // => {name: "Willie", color: "orange", toy: "yarn"}
keyAdderUniqueVal(cat, "fruit", "orange"); // => {name: "Willie", color: "orange", toy: "yarn"}
console.log(cat); // { name: "Willie", color: "orange", toy: "yarn" }
