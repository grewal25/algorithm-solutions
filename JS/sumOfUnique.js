var sumOfUnique = function (nums) {
  let k = {};
  for (let i = 0; i < nums.length; i++) {
    let element = nums[i];
    if (k[element] !== undefined) {
      k[element] = k[element] + 1;
    } else {
      k[element] = 1;
    }
  }
  let sum = 0;

  for (let [key, count] of Object.entries(k)) {
    console.log(count);
    if (count <= 1) {
      sum += parseInt(key);
    }
  }

  return sum;
};

console.log(sumOfUnique([1, 2, 3, 2]));
