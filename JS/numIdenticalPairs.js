function numIdenticalPairs(nums) {
  let count = 0;
  const freqMap = {};

  for (let num of nums) {
    if (freqMap[num]) {
      count = count + freqMap[num];
      freqMap[num] += 1;
    } else {
      freqMap[num] = 1;
    }
  }

  return count;
}
