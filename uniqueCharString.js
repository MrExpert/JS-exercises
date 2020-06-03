let str1 = "xyab";
let str2 = "xzca";
let uniql = "";
function unique_char(str1, str2) {
  for (var i = 0; i < str1.length; i++) {
    if (uniql.indexOf(str2.charAt(i)) == -1) {
      uniql += str2[i];
    }
  }
  return uniql;
}
console.log(unique_char(str1, str2));
