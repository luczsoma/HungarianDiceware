const initMatrix = (s1, s2) => {
  if (undefined == s1 || undefined == s2) {
    return null;
  }

  let d = [];
  for (let i = 0; i <= s1.length; i++) {
    d[i] = [];
    d[i][0] = i;
  }
  for (let j = 0; j <= s2.length; j++) {
    d[0][j] = j;
  }

  return d;
};

const damerau = (i, j, s1, s2, d, cost) => {
  if (i > 1 && j > 1 && s1[i - 1] === s2[j - 2] && s1[i - 2] === s2[j - 1]) {
    d[i][j] = Math.min.apply(null, [d[i][j], d[i - 2][j - 2] + cost]);
  }
};

export const distance = (s1, s2) => {
  if (
    undefined == s1 ||
    undefined == s2 ||
    "string" !== typeof s1 ||
    "string" !== typeof s2
  ) {
    return -1;
  }

  let d = initMatrix(s1, s2);
  if (null === d) {
    return -1;
  }
  for (var i = 1; i <= s1.length; i++) {
    let cost;
    for (let j = 1; j <= s2.length; j++) {
      if (s1.charAt(i - 1) === s2.charAt(j - 1)) {
        cost = 0;
      } else {
        cost = 1;
      }

      d[i][j] = Math.min.apply(null, [
        d[i - 1][j] + 1,
        d[i][j - 1] + 1,
        d[i - 1][j - 1] + cost,
      ]);

      damerau(i, j, s1, s2, d, cost);
    }
  }

  return d[s1.length][s2.length];
};
