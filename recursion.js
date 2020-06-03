// Repeat string recursion

function repeatNumTimes(string, times) {
  if (times < 0) return "";
  if (times === 1) return string;
  else return string + repeatNumTimes(string, times - 1);
}
repeatNumTimes("yes", 3);

// Simplest form of recursion
// arithmetic progression
var summation = function f(num) {
  return num ? num + f(num - 1) : 0;
};
