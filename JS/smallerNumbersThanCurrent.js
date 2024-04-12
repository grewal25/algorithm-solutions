function smallerNumbersThanCurrent(nums) {
  const sortedNums = [...nums].sort((a, b) => a - b);

  const map = {};
  sortedNums.forEach((num, index) => {
    if (map[num] === undefined) {
      map[num] = index;
    }
  });

  const result = nums.map((num) => map[num]);

  return result;
}

const nums = [8, 1, 2, 4, 3];

console.log(smallerNumbersThanCurrent(nums));
