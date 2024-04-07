/**
 * @param {string} s
 * @return {string}
 */

var reverseWord = function (word) {
  let w = "";
  for (i = word.length - 1; i >= 0; i--) {
    w += word[i];
  }
  return w;
};
var reverseWords = function (s) {
  let words = s.split(" ");
  let result = [];
  for (let i = 0; i < words.length; i++) {
    result.push(reverseWord(words[i]));
    console.log(result);
  }
  return result.join(" ");
};

console.log(reverseWords("Let's Hello"));
