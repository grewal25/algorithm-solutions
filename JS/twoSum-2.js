const twoSum = (nums, target) => {
  const map = {};

  for (i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (diff in map) {
      return [map[diff], i];
    }
    //update the map object with value(from nums[i]) to i position
    map[nums[i]] = i;
  }

  return [];
};

console.log(twoSum([8, 2, 67, 77, 7, 11, 15], 9));
