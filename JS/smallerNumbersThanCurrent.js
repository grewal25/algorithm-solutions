function smallerNumbersThanCurrent(nums) {
  const sortedNums = [...nums].sort((a, b) => a - b);
  const map = {};

  // Step 2: Populate the hashmap with the counts of smaller numbers
  for (let i = 0; i < sortedNums.length; i++) {
    // If the number is not already in the map, add it.
    // This ensures we get the smallest index (the count of numbers before it).
    if (map[sortedNums[i]] === undefined) {
      //   console.log(i);
      map[sortedNums[i]] = i;
      //   console.log(i, map);
    }
  }

  // Step 3: Generate the result array using the original numbers array
  const result = nums.map((num) => map[num]);

  return result;
}

// Example usage
const nums = [8, 1, 2, 2, 3];
// [1,2,2,3,8]
console.log(smallerNumbersThanCurrent(nums));
