var isPalindrome = function (s) {
  const removeEmptySpace = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  console.log(removeEmptySpace);
  let start = 0;
  let end = removeEmptySpace.length - 1;
  let endWord = [],
    startWord = [];
  while (start <= end) {
    const charAtStart = removeEmptySpace[start];
    const charAtEnd = removeEmptySpace[end];

    endWord.push(charAtEnd);
    startWord.push(charAtStart);
    console.log(endWord, startWord);
    start++;
    end--;
  }
  if (startWord.join("") !== endWord.join("")) {
    return false;
  } else {
    return true;
  }
};

console.log(isPalindrome("a."));
