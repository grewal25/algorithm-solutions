var isPalindrome = function (word) {
  let left = 0;
  let right = word.length - 1;
  while (left < right) {
    if (word[left] !== word[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true; // Ensure this is outside the loop
};

var firstPalindrome = function (words) {
  for (let i = 0; i < words.length; i++) {
    if (words[i].length === 1 || isPalindrome(words[i])) {
      return words[i];
    }
  }
  return "";
};

console.log(firstPalindrome(["e", "pfp"])); // Expected output: "e"
