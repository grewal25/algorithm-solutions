function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    console.log(left, right, mid);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      //   console.log("yess");
      left = mid + 1;
    } else {
      right = mid - 1;
      //   console.log(right);
    }
  }

  return -1; // Target not found
}

// Example usage:
const nums = [2, 4, 6, 8, 10];
const target = 4;
console.log(search(nums, target)); // Output: 4
