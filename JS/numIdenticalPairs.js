function numIdenticalPairs(nums) {
  const map = {};
  let count = 0;

  // Step 1 & 2: Fill the map with the frequency of each number
  for (const num of nums) {
    console.log(map[num]);
    if (map[num]) {
      map[num] += 1;
    } else {
      map[num] = 1;
    }
  }

  // Step 3: Calculate the number of good pairs for each frequency
  for (const key in map) {
    const n = map[key];
    count += (n * (n - 1)) / 2;
  }

  return count;
}

// Example usage
const nums = [1, 2, 3, 1, 1, 3];
console.log(numIdenticalPairs(nums)); // Output: 4
