// var singleNumber = function (nums) {
//   let k = {};
//   let count = 0;
//   nums.forEach((num, index) => {
//     console.log(k[num] === count);
//     if (k[num] === nums[index]) {
//       count++;
//     }
//   });

//   return k;
// };

var singleNumber = function (nums) {
  let k = {};
  nums.forEach((num) => {
    console.log(num);
    if (k[num] == undefined) {
      k[num] = 1;
    } else {
      k[num]++;
    }
  });

  for (let num in k) {
    if (k[num] === 1) {
      return num; // Returns the first number with a count of 1
    }
  }
};

console.log(singleNumber([2, 2, 1]));
