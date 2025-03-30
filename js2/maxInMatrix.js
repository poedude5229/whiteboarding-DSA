function maxInMatrix(matrix) {
  let max = 0;
  for (let i = 0; i < matrix.length; i++) {
    let subMat = matrix[i];
    for (let j = 0; j < subMat.length; j++) {
      if (subMat[j] > max) {
        max = subMat[j];
      }
    }
  }
  return max;
}

matrix = [
  [11, 2, -99],
  [20, 19, 10],
  [47, 72, 56],
];

console.log(maxInMatrix(matrix)); // 72
