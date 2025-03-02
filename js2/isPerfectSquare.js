const isPerfectSquare = (num) => {
  let i = 1;
  while (i <= num) {
    if (i * i == num) {
      return true;
    }
    i++;
  }
  return false;
};
