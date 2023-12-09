var isAnagram = function (s, t) {
  let obj1 = {};
  let obj2 = {};

  for (let char of s) {
    console.log(obj1[char]);
    if (obj1[char]) {
      obj1[char]++;
    } else {
      obj1[char] = 1;
    }
  }

  for (let char of t) {
    if (obj2[char]) {
      obj2[char]++;
    } else {
      obj2[char] = 1;
    }
  }
  console.log(obj1, obj2);
  for (let char in obj1) {
    console.log(obj1[char], obj2[char]);
    if (obj1[char] !== obj2[char]) {
      return false;
    }
  }

  // Check if both objects have the same number of properties
  return Object.keys(obj1).length === Object.keys(obj2).length;
};

let s = "anagram";
let t = "nagaram";
console.log(isAnagram(s, t)); // Output: true

//this algo works like this:
// take 2 words --> create frequency counter --> compare items in both objects
