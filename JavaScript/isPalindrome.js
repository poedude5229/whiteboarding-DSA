const isPalindrome = (x) => {
  let xString = `${x}`;
  let rString = xString.split("").reverse().join("");
  console.log(rString);
};
console.log(isPalindrome(-121));
