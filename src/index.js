module.exports = function check(str, bracketsConfig) {
  let single = [];
  let arrBrackets = [];

  bracketsConfig.forEach(i => {
      i.forEach(y => {
          arrBrackets.push(y)
      })
  });

  let arrSameBrackets = [];

  arrBrackets.forEach((i, index) => {
      if (arrBrackets[index - 1] === i) {
          arrSameBrackets.push(i)
      }
  });

  if (str.length % 2 !== 0) return false;
  for (let i = 0; i < str.length; i++) {
      if (arrSameBrackets.includes(str[i])) {
          if (str[i] === single[single.length - 1]) {
              single.pop();
          } else single.push(str[i]);
      } else if (arrBrackets.indexOf(str[i]) % 2 === 1) {
          if (single[single.length - 1] === arrBrackets[arrBrackets.indexOf(str[i]) - 1]) {
              single.pop()
          }
      } else single.push(str[i])
  }
  return single.length === 0;
}
