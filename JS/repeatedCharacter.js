function repeatedCharacter(s) {
  const seen = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    console.log(seen);
    if (seen[char]) {
      return char;
    }
    seen[char] = 1;
  }
}

console.log(repeatedCharacter("abccbaacz"));
