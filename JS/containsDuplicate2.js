var containsDuplicate = function (nums) {
  const set = new Set(nums);
  return set.size === nums.length ? false : true;
};

console.log(containsDuplicate([1, 2, 3, 4]));
