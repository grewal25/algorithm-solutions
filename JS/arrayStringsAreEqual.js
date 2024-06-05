var arrayStringsAreEqual = function (word1, word2) {
  let y = "",
    x = "";
  for (let i = 0; i < word1.length; i++) {
    x = x + word1[i];
  }
  for (let i = 0; i < word2.length; i++) {
    y = y + word2[i];
  }
  if (x === y) {
    return true;
  }
  return false;
};
