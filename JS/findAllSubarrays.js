function findAllSubarrays(nums) {
  let subarrays = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      let subarray = nums.slice(i, j + 1);
      subarrays.push(subarray); // Store the subarray
      //   console.log(subarray); // Print the subarray
    }
  }

  return subarrays; // Optionally return all subarrays if needed
}

// Example usage
const nums = [1, 2, 3];
const allSubarrays = findAllSubarrays(nums);
console.log(allSubarrays);
