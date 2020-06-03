// arr = [1, 5, 4, 3, 2];
// let k = 5;
// while (k > 0) {
//   function Flip(arr, k) {}
//   arr.pop();
//   console.log(arr);
//   k--;
//   console.log(k);
// }
let arr = [1, 5, 4, 3, 2];
let k = 5;
const result = [];
while (k > 0) {
  function flip(arr, k) {
    console.log("this is begining: ", arr);
    // 1-step: find the max number
    let maxNum = Math.max(...arr);
    // 2-step: find its index
    let inDex = arr.indexOf(maxNum);
    // 3-step: reverse the element 0 to that index
    let reVerse = arr.slice(0, inDex + 1).reverse();
    // 4-step: Join the array
    let uniteBack = [...reVerse, ...arr.slice(inDex + 1)];
    // 5-step: Flip the entire array
    let flp = uniteBack.reverse();
    // 6-step: take the last elment out to results
    result.push(flp[flp.length - 1]);
    k--;
  }
  console.log(arr);
  arr.pop();
  k--;
} // while loop closes
console.log("this is result: ", result);
console.log(flip(arr, k));
