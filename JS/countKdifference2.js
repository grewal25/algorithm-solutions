var countKDifference = function (nums, k) {
  const hash = {};
  let count = 0;

  for (let n of nums) {
    // If an element that is k less than the current element exists,
    // it can form a pair with the current element.
    if (hash[n - k]) {
      count += hash[n - k];
      //   console.log(hash);
    }

    // If an element that is k more than the current element exists,
    // it can also form a pair with the current element.
    if (hash[n + k]) {
      count += hash[n + k];
      //   console.log(hash);
    }

    // Record the current element in the hash map, incrementing the count
    // for this element. This sets up future potential pairs.
    hash[n] = (hash[n] || 0) + 1;
    console.log(hash);
  }

  return count;
};

console.log(countKDifference([1, 3, 4, 2], 2));
