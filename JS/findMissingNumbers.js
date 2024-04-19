function findMissingNumber(nums) {
  let xorSum = 0;
  let n = nums.length;

  for (let i = 0; i <= n; i++) {
    xorSum = xorSum ^ i;
  }

  for (let num of nums) {
    xorSum = xorSum ^ num;
  }

  return xorSum;
}

// Example usage:
const nums = [3, 0, 1];
console.log(findMissingNumber(nums)); // Output: 2
