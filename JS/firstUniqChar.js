var firstUniqChar = function (s) {
  let k = {};
  for (let i = 0; i < s.length; i++) {
    let p = s[i];
    if (k[p] !== undefined) {
      k[p] = k[p] + 1;
    } else k[p] = 1;
  }
  for (let i = 0; i < s.length; i++) {
    console.log(k[s[i]]);
    if (k[s[i]] === 1) {
      return i;
    }
  }
};

console.log(firstUniqChar("loveleetcode"));
