var countPairs = function (nums, target) {
  nums.sort((a, b) => a - b);
  let left = 0,
    right = nums.length - 1;
  let count = 0;

  while (left < right) {
    let sum = nums[left] + nums[right];
    // console.log(sum, target);
    if (sum < target) {
      count += right - left;
      left++;
    } else {
      right--;
    }
  }

  return count;
};

console.log(countPairs([1, 2, 3, 4, 5], 7));
