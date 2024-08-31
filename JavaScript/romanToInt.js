const romanToInt = (string) => {
  let sum = 0;
  for (let index = 0; index < string.length; index++) {
    if (string[index] == "M") {
      if (string[index - 1] == "C") {
        sum += 900;
      } else {
        sum += 1000;
      }
    }
    if (string[index] == "D") {
      if (string[index - 1] == "C") {
        sum += 400;
      } else {
        sum += 500;
      }
    }
    if (
      string[index] == "C" &&
      string[index + 1] !== "D" &&
      string[index + 1] != "M"
    ) {
      if (string[index - 1] == "X") {
        sum += 90;
      } else {
        sum += 100;
      }
    }
    if (string[index] == "L") {
      if (string[index - 1] == "X") {
        sum += 40;
      } else {
        sum += 50;
      }
    }
    if (
      string[index] == "X" &&
      string[index + 1] != "L" &&
      string[index + 1] != "C"
    ) {
      if (string[index - 1] == "I") {
        sum += 9;
      } else {
        sum += 10;
      }
    }
    if (string[index] == "V") {
      if (string[index - 1] == "I") {
        sum += 4;
      } else {
        sum += 5;
      }
    }
    if (
      string[index] == "I" &&
      string[index + 1] != "V" &&
      string[index + 1] != "X"
    ) {
      sum += 1;
    }
  }
  return sum;
};

console.log(romanToInt("MCMXCIV"));
