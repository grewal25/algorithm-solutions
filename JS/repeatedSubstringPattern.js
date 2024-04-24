function repeatedSubstringPattern(s) {
  // Concatenate the string with itself
  let doubled = s + s;

  // Consider only the sliced string which excludes the first and last character
  let sliced = doubled.slice(1, -1);

  // Find the original string in the sliced doubled string
  // If the original string s exists in the sliced version, it implies there is a repeating pattern
  return sliced.indexOf(s) !== -1;
}

// Example usage:
let s = "abab";
console.log(repeatedSubstringPattern(s)); // Output: true
