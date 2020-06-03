//

function getCount(str) {
  var vowelsCount = 0;
  var alpha = str.replace(/\s/g, "").split("");
  var vowels = "aeiou".split("");
  for (let i = 0; i < alpha.length; i++) {
    if (vowels.includes(alpha[i])) vowelsCount++;
  }
  return vowelsCount;
}
