const isPalindrome = (s) => {
  let betterS = "";
  for (let i = 0; i < s.length; i++) {
    if ("ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".includes(s[i].toUpperCase())) {
      betterS += s[i].toUpperCase();
    }
  }
  //   console.log(betterS);

  let reversedS = "";
  for (let i = betterS.length - 1; i >= 0; i--) {
    reversedS += betterS[i];
  }

  if (betterS.length !== reversedS.length) {
    return false;
  }
  for (let i = 0; i < betterS.length; i++) {
    if (betterS[i] !== reversedS[i]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome("raceca r?"));
console.log(isPalindrome("farts?"));
console.log(isPalindrome("0P"));
