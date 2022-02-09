const diagonalSum = (mat) => {
  let count = 0;
  let n = mat.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) {
        count += mat[i][j];
        //console.log(count)
      }
      if (i + j === n - 1) {
        count += mat[i][j];
      }
    }
  }
  if (n % 2 !== 0) {
    count -= mat[Math.floor(n / 2)][Math.floor(n / 2)];
  }
  return count;
};

console.log(
  diagnolSum([
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ])
);
