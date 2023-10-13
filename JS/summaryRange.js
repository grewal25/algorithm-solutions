function summaryRanges(nums) {
  const ranges = [];

  for (let i = 0; i < nums.length; i++) {
    let start = nums[i];

    while (i + 1 < nums.length && nums[i + 1] - nums[i] === 1) {
      i++;
    }

    let end = nums[i];
    ranges.push(end === start ? start.toString() : start + "->" + end);
  }

  return ranges;
}

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
