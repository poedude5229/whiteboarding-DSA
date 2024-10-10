const logBetweenStepper = (min, max, step) => {
  if (min > max) {
    for (let i = min; i >= max; i -= step) {
      console.log(i);
    }
  } else {
    for (let i = min; i <= max; i += step) {
      console.log(i);
    }
  }
  return;
};

logBetweenStepper(5, 9, 1);
logBetweenStepper(15, -10, 5);
