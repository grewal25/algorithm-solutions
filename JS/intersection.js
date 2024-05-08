var intersection = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);

  let arr = [...set1, ...set2];

  let k = {};

  for (let i = 0; i <= arr.length; i++) {
    let e = arr[i];
    if (k[e] !== undefined) {
      k[e]++;
    } else {
      k[e] = 1;
    }
  }

  let j = [];
  for (let [key, value] of Object.entries(k)) {
    if (value >= 2) {
      j.push(parseInt(key));
    }
  }
  return j;
};

console.log(intersection([1, 2, 2, 3, 4], [3, 3, 4]));
