/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums, diff) {
  let count = 0;
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }
  for (let i = 0; i < nums.length; i++) {
    let j = map.get(diff + nums[i]);
    if (!j) continue;
    let k = map.get(diff + nums[j]);
    if (!k) continue;
    if (i < j && j < k) count++;
  }
  return count;
};
