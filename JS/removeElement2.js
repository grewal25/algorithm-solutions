function removeElement(nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
    console.log(i, nums, k);
  }

  return k;
}

// Example usage:
let nums = [5, 2, 4, 2, 1, 0];
let k = removeElement(nums, 2);
console.log(k); // Output: 2
// console.log(nums.slice(0, k)); // Output: [2, 2]
