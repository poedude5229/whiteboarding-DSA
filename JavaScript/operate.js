function operate(num1, num2, stringOp) {
  if (stringOp === "greater than") {
    return num1 > num2;
  }
  if (stringOp === "less than") {
    return num1 < num2;
  }
  if (stringOp === "equal to") {
    return num1 === num2;
  }
  if (stringOp === "not equal to") {
    return num1 !== num2;
  }
  return "Invalid Operation";
}

console.log(operate(456, 123, "greater than")); // true
console.log(operate(654, 654, "less than")); // false
console.log(operate(99, 3, "equal to")); // false
console.log(operate(111, 3, "not equal to")); // true
console.log(operate(42, 42, "opposite to")); // "Invalid Operation"
