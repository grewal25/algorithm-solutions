function arrayPairSum(nums) {
  nums.sort();
  console.log(nums);
  // Sort the array in ascending order
  let maxSum = 0;
  for (let i = 0; i < nums.length; i += 2) {
    maxSum += nums[i]; // Add the smaller value to maxSum
  }
  return maxSum;
}

console.log(arrayPairSum([1, 2, 3, 4]));
