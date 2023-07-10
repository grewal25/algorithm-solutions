var removeDuplicates = function (nums) {
  const copySet = new Set(nums);
  let count = 0;

  copySet.forEach((item) => {
    nums[count] = item;
    count++;
  });

  return count;
};

console.log(removeDuplicates([1, 1, 2, 3, 3, 4, 4]));
