var areOccurrencesEqual = function (s) {
  let k = {};
  for (let i = 0; i <= s.length - 1; i++) {
    let e = s[i];

    if (k[e] !== undefined) {
      k[e]++;
    } else {
      k[e] = 1;
    }
  }

  const values = Object.values(k);

  if (values.length === 0) return true;
  const firstValue = values[0];

  return values.every((value) => value === firstValue);
};

console.log(areOccurrencesEqual("aaabb"));
