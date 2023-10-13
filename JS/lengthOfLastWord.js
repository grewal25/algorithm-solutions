var lengthOfLastWord = function (s) {
  let removedSpaces = s.split(" ");
  filteredArray = removedSpaces.filter((str) => str.length > 0);
  return filteredArray.pop().length;
};
console.log(lengthOfLastWord(" hello world "));
