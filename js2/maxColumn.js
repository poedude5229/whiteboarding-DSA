const maxColumn = (matrix) => {
  let maxes = [];
  let height = matrix.length;
  let width = matrix[0].length;

  for (let i = 0; i < width; i++) {
    let iMax = matrix[0][i];
    for (let j = 1; j < height; j++) {
      if (matrix[j][i] > iMax) {
        iMax = matrix[j][i];
      }
    }
    maxes.push(iMax);
  }
  return maxes;
};

let matrix = [
  [5, 9, 21],
  [9, 19, 6],
  [12, 14, 15],
];

console.log(maxColumn(matrix)); // [12, 19, 21]

let m2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(maxColumn(m2)); // [3,6,9]
