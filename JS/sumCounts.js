var sumCounts = function (nums) {
  let result = 0;
  for (let start = 0; start < nums.length; start++) {
    const distinct = new Set();
    for (let end = start; end < nums.length; end++) {
      distinct.add(nums[end]);
      result += distinct.size * distinct.size;
    }
  }

  return result;
};

console.log(sumCounts([1, 2, 1]));
